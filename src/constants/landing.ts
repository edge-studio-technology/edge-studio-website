import {
  Cable,
  Share2,
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

export const statusLabels = {
  availableNow: 'Available now',
  inProgress: 'In progress',
  next: 'Next',
  comingSoon: 'Coming soon',
} as const;

export const externalLinks = {
  github: 'https://github.com/edge-studio-technology/edge-studio',
  docs: 'https://github.com/edge-studio-technology/edge-studio/wiki',
  gettingStarted:
    'https://github.com/edge-studio-technology/edge-studio/wiki/Getting-Started',
  installScript:
    'https://github.com/edge-studio-technology/edge-studio/blob/main/install.sh',
} as const;

export const landingCopy = {
  eyebrow: 'local-first · built for Raspberry Pi',
  heroTitle: 'Build Raspberry Pi projects that can',
  heroAccent: 'prove what happened.',
  heroText:
    'Connect sensors, cameras, devices and web services. Edge Studio helps your Pi create verifiable records of real-world data and events — right from the edge.',
  heroSupport:
    'Your Raspberry Pi already senses the world. Now it can create trusted records.',
  docsLink: 'Get started',
  githubLink: 'View on GitHub',
  previewTitle: 'Your edge, in one workspace',
  previewText:
    'Monitor the Pi, connected devices, workflow runs, Minima, and Integritas from one local dashboard.',
  installTitle: 'Install Edge Studio on your Raspberry Pi',
  installText:
    'Run Edge Studio locally on a Raspberry Pi, connect a data source, and create your first proof-backed record.',
  installLink: 'View install script',
  featuresEyebrow: 'One local workbench',
  featuresTitle:
    'Connect, automate and prove real-world data — right at the edge.',
  dashboardTitle: 'Operate from one local dashboard',
  dashboardText:
    'See the health of your Pi, connected devices, workflow runs, proof records, Minima node and Integritas connection at a glance.',
  dashboardBullets: [
    'Manage devices, workflows, proofs, wallet, and updates',
    'Review device reads and every workflow run',
    'Keep configuration and operational history on your Pi',
  ],
  poweredByEyebrow: 'Powered by Minima and Integritas',
  poweredByTitle:
    'Edge Studio brings the trust building blocks together on your Pi.',
  poweredByText:
    'Run a Minima node locally, manage wallet and node health, and use Integritas to create proof records for the files and workflow data you choose.',
  roadmapEyebrow: 'Roadmap',
  roadmapTitle: 'From verified Pi data to an edge builder economy.',
  roadmapText:
    'Edge Studio starts with verifiable Pi data, then expands toward places where builders can sell, share, combine and extend what they create.',
  footerText:
    'Edge Studio — build verifiable Raspberry Pi projects from the edge.',
} as const;

export const features: Feature[] = [
  {
    title: 'Devices',
    text: 'Connect HTTP services, webhooks, MQTT, GPIO, environmental sensors and Pi Camera inputs in one workspace.',
    Icon: Cable,
    detail:
      'Bring web services and physical devices into workflows as readable inputs, capture devices or controllable outputs.',
  },
  {
    title: 'Workflows',
    text: 'Build repeatable local workflows from triggers, data steps, logic and actions.',
    Icon: Workflow,
    detail:
      'Trigger workflows on schedules or events, process data, control outputs, create previews and attach proof stamping where it matters.',
  },
  {
    title: 'Proofs',
    text: 'Create proof records for selected files and workflow data, then verify or export them later.',
    Icon: ShieldCheck,
    detail:
      'Create an auditable link between edge data and a proof record you can check later.',
  },
  {
    title: 'Ledger',
    text: 'Run and monitor the Minima ledger, node, wallet, peers, and tokens on your own hardware.',
    Icon: Share2,
    detail:
      'Monitor the Minima ledger, node health, peers, and wallet activity from the same local interface as your edge workflows.',
  },
];

export const roadmap: RoadmapItem[] = [
  {
    phase: statusLabels.availableNow,
    title: 'Prove Pi data',
    text: 'Create trusted records from sensors, images, events and device state.',
    state: 'active',
  },
  {
    phase: statusLabels.inProgress,
    title: 'Better workflow building',
    text: 'Make building, editing, watching and diagnosing visual workflows more intuitive.',
    state: 'passive',
  },
  {
    phase: statusLabels.next,
    title: 'Guided starter projects',
    text: 'Add device guides, recipes and first workflows for common Raspberry Pi, MQTT, GPIO, camera and sensor setups.',
    state: 'passive',
  },
  {
    phase: statusLabels.comingSoon,
    title: 'Marketplace',
    text: 'Publish, discover, install, sell or share datasets and third-party modules.',
    state: 'passive',
  },
  {
    phase: statusLabels.comingSoon,
    title: 'Data pools',
    text: 'Combine proof-backed data from multiple builders to increase usefulness and value.',
    state: 'passive',
  },
];
