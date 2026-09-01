import { Navbar } from '../components';
import { SiteFooter } from '../components';

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-grey-01 text-text-primary">
      <Navbar legal />
      <main className="mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
          Edge Studio
        </span>
        <h1 className="type-display mt-4 text-5xl">{title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-text-secondary">
          {intro}
        </p>
        <div className="mt-12 space-y-10">
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className="type-title text-2xl">{heading}</h2>
              <p className="mt-3 leading-relaxed text-text-secondary">{body}</p>
            </section>
          ))}
        </div>
        <p className="mt-14 border-t border-grey-02 pt-6 text-xs text-text-secondary">
          Draft updated: August 13, 2026. This copy reflects the current Edge
          Studio prototype and is not final legal text. It should be reviewed
          for your organisation and jurisdiction before publication.
        </p>
      </main>
      <SiteFooter legal />
    </div>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title="Terms of use (draft)"
      intro="Edge Studio is an experimental, self-hosted Raspberry Pi application for local edge workflows and verifiable records. These draft terms describe the responsibilities that come with installing it, connecting devices, and running automations on hardware and networks you control."
      sections={[
        {
          heading: 'Installing and operating Edge Studio',
          body: 'You are responsible for the Raspberry Pi, network, credentials, connected devices, and configuration used to run Edge Studio. Use the software only where you have permission and in compliance with applicable laws and device safety requirements.',
        },
        {
          heading: 'Your data and automations',
          body: 'You remain responsible for the files, sensor readings, camera captures, messages, transactions, and other data your workflows process. Review workflows before enabling them, especially when they control hardware, publish data, or send Minima.',
        },
        {
          heading: 'Connected services and networks',
          body: 'Some features connect to Integritas, GitHub, the Minima network, or endpoints you configure. Those connections may be governed by separate terms, and blockchain actions such as payments or token operations may be irreversible.',
        },
        {
          heading: 'Prototype status',
          body: 'Edge Studio is a learning prototype and is not production-hardened. Features, interfaces, and data formats may change. Back up important data, restrict access to trusted networks, and do not rely on the prototype for safety-critical or high-value operations.',
        },
        {
          heading: 'Contact',
          body: 'For questions about Edge Studio or these draft terms, contact the project team through the GitHub repository or your designated Integritas Technology support channel.',
        },
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy notice (draft)"
      intro="Edge Studio is designed to keep its application state and operational history on your Raspberry Pi. Data leaves the device only when a feature, workflow, or network connection you configure requires it."
      sections={[
        {
          heading: 'Information stored on your Pi',
          body: 'Edge Studio may store local administrator credentials, device and workflow configuration, read and run history, proof records, audit events, Minima node and wallet data, and files captured or selected for processing. Runtime state is stored on the Raspberry Pi or storage you configure.',
        },
        {
          heading: 'When data leaves the device',
          body: 'Integritas features may send account or device identifiers, hashes, and proof requests to Integritas services. Minima connects to its peer network. Update checks contact GitHub, and workflows may call HTTP or MQTT endpoints that you configure.',
        },
        {
          heading: 'Your workflow choices',
          body: 'You decide which inputs, captures, files, and workflow outputs are sent to external services. Before enabling a workflow, check its blocks, destination settings, and any attached Integritas stamping action.',
        },
        {
          heading: 'Retention and security',
          body: 'Retention varies by data type and configuration. For example, camera captures can be pruned automatically, while other local histories remain until you delete them or remove the installation. Edge Studio provides local authentication and HTTPS, but you are responsible for device security, backups, network access, and the services you connect.',
        },
        {
          heading: 'Contact',
          body: 'For questions about this draft notice or data handled by Integritas services, contact Integritas Technology through your designated support or privacy channel.',
        },
      ]}
    />
  );
}
