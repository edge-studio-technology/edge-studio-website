import {
  Database,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export type Feature = {
  title: string;
  text: string;
  detail: string;
  Icon: LucideIcon;
};

export type RoadmapItem = {
  phase: string;
  title: string;
  text: string;
  state: 'active' | 'passive';
};

export const landingCopy = {
  eyebrow: 'self-hosted by design',
  heroTitle: 'Your Raspberry Pi, turned into a',
  heroAccent: 'trust layer.',
  heroText:
    'Edge Studio runs a dashboard, API, local Minima node, and auto-updater on one Pi — capture data, automate it, and stamp it as proof, all under your own roof.',
  docsLink: 'Read the docs',
  githubLink: 'View on GitHub',
  previewTitle: 'Dashboard screenshot',
  previewText: 'A real Edge Studio view will appear here.',
  installTitle: 'Install on Raspberry Pi',
  installLink: 'View install script',
  featuresEyebrow: 'What you get',
  featuresTitle: 'Everything runs on the Pi you already own.',
  dashboardTitle: 'Dashboard',
  dashboardText: 'Watch every device and proof at a glance.',
  dashboardBullets: [
    'Capture data from APIs, sensors, and cameras',
    'Automate it with chained workflow rules',
    'Stamp it and verify proof anytime',
  ],
  poweredByEyebrow: 'Built on verifiable foundations',
  poweredByTitle: 'Powered by Minima and Integritas.',
  poweredByText:
    'Minima runs the local ledger. Integritas hashes and stamps the data Edge Studio captures.',
  roadmapEyebrow: 'Roadmap',
  roadmapTitle: 'A clearer path from data to trust.',
  roadmapText:
    'Edge Studio is growing around the things that make local, verifiable automation useful every day.',
  footerText: 'Edge Studio — self-hosted on your own Raspberry Pi.',
} as const;

export const features: Feature[] = [
  {
    title: 'Data sources',
    text: 'Pull HTTP APIs, receive webhooks, or watch GPIO, MQTT, and the Pi Camera.',
    Icon: Database,
    detail: 'Connect APIs, sensors, webhooks, and cameras in one place.',
  },
  {
    title: 'Automation',
    text: 'Chain triggers, conditions, and actions into repeatable workflows.',
    Icon: Workflow,
    detail:
      'Build repeatable workflows from triggers, conditions, and actions.',
  },
  {
    title: 'Integritas',
    text: 'Hash and stamp any file or automated reading, then check its status anytime.',
    Icon: ShieldCheck,
    detail: 'Turn readings and files into verifiable proofs with one click.',
  },
  {
    title: 'Minima',
    text: 'A real node on the ledger, running on your own hardware.',
    Icon: Server,
    detail: 'Keep a live ledger node running locally on your Raspberry Pi.',
  },
];

export const roadmap: RoadmapItem[] = [
  {
    phase: 'Now',
    title: 'Core dashboard',
    text: 'Connect your Pi, devices, and first proofs.',
    state: 'active',
  },
  {
    phase: 'Soon',
    title: 'More integrations',
    text: 'Bring more sensors, APIs, and edge devices into the same view.',
    state: 'passive',
  },
  {
    phase: 'Next',
    title: 'Modules building with an in-app IDE',
    text: 'Build and customize modules directly inside Edge Studio.',
    state: 'passive',
  },
  {
    phase: 'V2',
    title: 'Marketplace',
    text: 'Discover and install community-built modules to build scale pools, monetize your data assets, and turn them into data products.',
    state: 'passive',
  },
];
