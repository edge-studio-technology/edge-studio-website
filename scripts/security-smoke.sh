#!/usr/bin/env bash

set -euo pipefail

image_name="${SECURITY_SMOKE_IMAGE:-edge-studio-website:security-smoke}"
container_name="edge-studio-security-smoke-${RANDOM}-$$"

cleanup() {
  docker stop "${container_name}" >/dev/null 2>&1 || true
}

trap cleanup EXIT

docker build --tag "${image_name}" . >/dev/null
docker run \
  --rm \
  --detach \
  --name "${container_name}" \
  --read-only \
  --cap-drop ALL \
  --security-opt no-new-privileges:true \
  --tmpfs /tmp:rw,noexec,nosuid,size=16m,mode=1777 \
  --publish 127.0.0.1::8080 \
  "${image_name}" >/dev/null

host_port="$(docker port "${container_name}" 8080/tcp | sed -E 's/.*:([0-9]+)$/\1/')"
base_url="http://127.0.0.1:${host_port}"

for _ in $(seq 1 30); do
  if curl --silent --output /dev/null "${base_url}/"; then
    break
  fi
  sleep 1
done

assert_response() {
  local path="$1"
  local expected_status="$2"
  local response
  local status

  response="$(curl --silent --show-error --dump-header - --output /dev/null "${base_url}${path}")"
  status="$(printf '%s\n' "${response}" | awk 'NR == 1 { print $2 }')"

  if [[ "${status}" != "${expected_status}" ]]; then
    printf 'Expected %s from %s, received %s\n' "${expected_status}" "${path}" "${status}" >&2
    return 1
  fi

  for header in \
    Content-Security-Policy \
    Cross-Origin-Opener-Policy \
    Permissions-Policy \
    Referrer-Policy \
    Strict-Transport-Security \
    X-Content-Type-Options \
    X-Frame-Options; do
    if ! printf '%s\n' "${response}" | grep --quiet --ignore-case "^${header}:"; then
      printf 'Missing %s on %s\n' "${header}" "${path}" >&2
      return 1
    fi
  done
}

assert_response / 200
assert_response /assets/missing.js 404
assert_response /not-found 404

printf 'Security header smoke test passed.\n'
