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

export const externalLinks = {
  github: 'https://github.com/integritas-technology/edge-studio',
  docs: 'https://github.com/integritas-technology/edge-studio/wiki',
  installScript:
    'https://github.com/integritas-technology/edge-studio/blob/main/install.sh',
} as const;

export const landingCopy = {
  eyebrow: 'local-first · built for Raspberry Pi',
  heroTitle: 'Turn your Raspberry Pi into a',
  heroAccent: 'verifiable edge studio.',
  heroText:
    'Connect physical devices and web services, build visual workflows, and stamp selected data through Integritas—with a Minima node and wallet running on your Pi.',
  docsLink: 'Read the docs',
  githubLink: 'View on GitHub',
  previewTitle: 'Your edge, in one workspace',
  previewText:
    'Monitor the Pi, connected devices, workflow runs, Minima, and Integritas from one local dashboard.',
  installTitle: 'Install Edge Studio on Raspberry Pi',
  installLink: 'View install script',
  featuresEyebrow: 'One local workspace',
  featuresTitle: 'Connect, automate, and prove—right at the edge.',
  dashboardTitle: 'Operate from one dashboard',
  dashboardText:
    'See the health of your Pi, devices, Minima node, and Integritas connection at a glance.',
  dashboardBullets: [
    'Manage devices, workflows, proofs, wallet, and updates',
    'Review device reads and every workflow run',
    'Keep configuration and operational history on your Pi',
  ],
  poweredByEyebrow: 'Two layers of trust',
  poweredByTitle: 'Minima on your Pi. Integritas for proof.',
  poweredByText:
    'Run and manage a Minima node locally, then use Integritas to stamp and verify the files and workflow data you choose.',
  roadmapEyebrow: 'What is next',
  roadmapTitle: 'The prototype is working. The studio keeps growing.',
  roadmapText:
    'Edge Studio is evolving from a capable Raspberry Pi workspace into a more guided, extensible platform for edge automation.',
  footerText:
    'Edge Studio — local-first automation and verifiable data on Raspberry Pi.',
} as const;

export const features: Feature[] = [
  {
    title: 'Devices',
    text: 'Bring HTTP, webhooks, MQTT, GPIO, environmental sensors, and the Pi Camera into one workspace.',
    Icon: Database,
    detail:
      'Connect web services and physical devices as readable inputs, capture devices, or controllable outputs.',
  },
  {
    title: 'Workflows',
    text: 'Compose starts, data steps, logic, and actions into repeatable edge workflows.',
    Icon: Workflow,
    detail:
      'Trigger on schedules or events, process data, control outputs, create previews, and attach proof stamping.',
  },
  {
    title: 'Proofs',
    text: 'Stamp files and selected workflow data, then verify and export the resulting proof records.',
    Icon: ShieldCheck,
    detail:
      'Create an auditable link between the data captured at the edge and a proof you can check later.',
  },
  {
    title: 'Minima',
    text: 'Run and monitor a Minima node, wallet, peers, and tokens on your own hardware.',
    Icon: Server,
    detail:
      'Manage node health and wallet activity from the same browser interface as your edge workflows.',
  },
];

export const roadmap: RoadmapItem[] = [
  {
    phase: 'Today',
    title: 'Local edge workspace',
    text: 'Install on a Pi, connect devices, build workflows, and create verifiable records.',
    state: 'active',
  },
  {
    phase: 'In progress',
    title: 'Richer workflow builder',
    text: 'Make building, editing, watching, and diagnosing visual workflows more intuitive.',
    state: 'passive',
  },
  {
    phase: 'Next',
    title: 'Guided device onboarding',
    text: 'Add more device guides and starter workflows for common Raspberry Pi and MQTT setups.',
    state: 'passive',
  },
  {
    phase: 'Later',
    title: 'Module marketplace',
    text: 'Discover and install integrations and add-ons from inside Edge Studio.',
    state: 'passive',
  },
];
