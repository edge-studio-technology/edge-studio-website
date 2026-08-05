import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

export function CopyableCode({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard failures in non-secure contexts
    }
  }

  return (
    <div className="flex items-center gap-2 rounded-xl bg-slate-100 p-3">
      <b className="mr-2 text-brand-02">$</b>
      <code className="flex-1 break-all text-xs text-slate-700 font-mono">
        {value}
      </code>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? 'Copied' : 'Copy to clipboard'}
        title={copied ? 'Copied' : 'Copy'}
        className="grid size-11 shrink-0 place-items-center rounded-soft border-0 bg-slate-200 text-slate-700 hover:bg-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01"
      >
        {copied ? (
          <Check size={14} aria-hidden="true" />
        ) : (
          <Copy size={14} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
