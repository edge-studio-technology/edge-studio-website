import vikeReact from 'vike-react/config';
import type { Config } from 'vike/types';

export default {
  extends: [vikeReact],
  favicon: '/es_logo/svg/es-logo-purple.svg',
  lang: 'en',
  prerender: true,
  reactStrictMode: true,
  viewport: 'responsive',
} satisfies Config;
