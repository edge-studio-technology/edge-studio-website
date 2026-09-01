import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { externalLinks, landingCopy } from '../../constants/landing';

const footerLinkClass =
  'inline-flex min-h-11 min-w-11 items-center justify-center gap-1 rounded-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01';

function FooterLink({
  external = false,
  href,
  children,
}: {
  external?: boolean;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className={footerLinkClass}
      href={href}
      {...(external && { target: '_blank', rel: 'noreferrer' })}
    >
      {children}
    </a>
  );
}

export function SiteFooter({ legal = false }: { legal?: boolean }) {
  return (
    <footer className="border-t border-grey-02">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between lg:px-8">
        {!legal && <span>{landingCopy.footerText}</span>}
        <div className="flex flex-wrap gap-x-5">
          {!legal && (
            <>
              <FooterLink href="#build-ideas">Build ideas</FooterLink>
              <FooterLink href="#how-it-works">How it works</FooterLink>
              <FooterLink href="#features">Features</FooterLink>
              <FooterLink href="#roadmap">Roadmap</FooterLink>
            </>
          )}
          <FooterLink href="/terms">Terms</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink external href={externalLinks.docs}>
            Docs <ExternalLink size={14} />
          </FooterLink>
          <FooterLink external href={externalLinks.github}>
            GitHub <ExternalLink size={14} />
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}
