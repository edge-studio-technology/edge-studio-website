import { ExternalLink, Link2 } from 'lucide-react';
import { externalLinks, landingCopy } from '../../constants/landing';

export function ClosingCtaSection() {
  return (
    <section
      aria-labelledby="closing-cta-title"
      className="border-b border-grey-06 bg-core-black text-core-white"
    >
      <div className="mx-auto max-w-3xl px-5 py-20 text-center lg:px-8 lg:py-28">
        <h2
          id="closing-cta-title"
          className="type-heading text-4xl text-balance"
        >
          {landingCopy.closingTitle}
        </h2>
        <p className="type-callout mt-4 text-grey-03">
          {landingCopy.closingText}
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
          <a
            className="gap-detail-next rounded-loose inline-flex h-11 w-fit items-center justify-center overflow-clip border border-transparent bg-surface-accent px-detail-close type-body text-text-inverse transition-colors duration-200 hover:bg-surface-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
            href={externalLinks.gettingStarted}
            target="_blank"
            rel="noreferrer"
          >
            {landingCopy.closingPrimaryCta}
            <Link2 size={16} />
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-1 border-b border-core-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
            href={externalLinks.starterProjects}
            target="_blank"
            rel="noreferrer"
          >
            {landingCopy.closingSecondaryCta}
            <ExternalLink size={15} />
          </a>
        </div>
        <a
          className="mt-10 inline-flex items-center gap-1 text-sm text-grey-03 underline hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
          href={externalLinks.issues}
          target="_blank"
          rel="noreferrer"
        >
          {landingCopy.closingFeedbackText}
          <ExternalLink size={14} />
        </a>
      </div>
    </section>
  );
}
