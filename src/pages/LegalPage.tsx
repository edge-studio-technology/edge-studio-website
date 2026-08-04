import { Navbar } from '../components';
import { SiteFooter } from '../components';

type LegalPageProps = {
  title: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
};

export function LegalPage({ title, intro, sections }: LegalPageProps) {
  return (
    <div className='min-h-screen bg-grey-01 text-text-primary'>
      <Navbar legal />
      <main className='mx-auto max-w-3xl px-5 py-16 lg:px-8 lg:py-24'>
        <span className='text-xs font-semibold uppercase tracking-[0.16em] text-brand-01'>
          Edge Studio
        </span>
        <h1 className='type-display mt-4 text-5xl'>{title}</h1>
        <p className='mt-6 text-lg leading-relaxed text-text-secondary'>
          {intro}
        </p>
        <div className='mt-12 space-y-10'>
          {sections.map(({ heading, body }) => (
            <section key={heading}>
              <h2 className='type-title text-2xl'>{heading}</h2>
              <p className='mt-3 leading-relaxed text-text-secondary'>{body}</p>
            </section>
          ))}
        </div>
        <p className='mt-14 border-t border-grey-02 pt-6 text-xs text-text-secondary'>
          Last updated: August 3, 2026. These pages are placeholder text and
          should be reviewed for your organisation and jurisdiction before
          launch.
        </p>
      </main>
      <SiteFooter legal />
    </div>
  );
}

export function TermsPage() {
  return (
    <LegalPage
      title='Terms of use'
      intro='These basic terms describe the general conditions for using Edge Studio. Replace this placeholder with terms reviewed for your product before publishing.'
      sections={[
        {
          heading: 'Using the service',
          body: 'You may use Edge Studio only in compliance with applicable laws and these terms. You are responsible for your account, your devices, and the data and automations you run through the service.',
        },
        {
          heading: 'Your content',
          body: 'You retain responsibility for content, files, readings, and other information you provide or process. You must have the necessary rights and permissions to use that content.',
        },
        {
          heading: 'Availability and changes',
          body: 'Edge Studio is provided on an ongoing basis, but features may change and availability is not guaranteed. We may update, suspend, or discontinue parts of the service when reasonably necessary.',
        },
        {
          heading: 'Disclaimer and liability',
          body: 'The service is provided as available and without warranties beyond those required by law. To the extent permitted by law, Edge Studio is not responsible for indirect or consequential losses arising from use of the service.',
        },
        {
          heading: 'Contact',
          body: 'For questions about these terms, contact the Edge Studio team through the project repository or your designated support channel.',
        },
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <LegalPage
      title='Privacy policy'
      intro='This basic policy explains the types of information Edge Studio may handle. Replace this placeholder with details about your actual data flows, providers, retention, and legal basis.'
      sections={[
        {
          heading: 'Information we handle',
          body: 'Depending on how Edge Studio is configured, we may handle account details, device and configuration data, logs, support messages, and content that you choose to process through the service.',
        },
        {
          heading: 'How we use information',
          body: 'We use information to provide, secure, maintain, and improve Edge Studio, respond to requests, and meet legal obligations. We do not use your locally stored device data for unrelated purposes.',
        },
        {
          heading: 'Sharing and storage',
          body: 'We share information only with service providers needed to operate the service, when you direct us to, or when required by law. Self-hosted data remains on infrastructure you control unless you connect an external service.',
        },
        {
          heading: 'Retention and your choices',
          body: 'We retain information only as long as needed for the purposes described above or as required by law. You may request access, correction, deletion, or clarification about your information where applicable.',
        },
        {
          heading: 'Contact',
          body: 'For privacy questions or requests, contact the Edge Studio team through the project repository or your designated privacy channel.',
        },
      ]}
    />
  );
}
