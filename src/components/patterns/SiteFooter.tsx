import type { ReactNode } from 'react';
import { ExternalLink } from 'lucide-react';
import { externalLinks, landingCopy } from '../../constants/landing';

const footerLinkClass =
  'inline-flex min-h-11 min-w-11 items-center justify-start gap-1 rounded-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01 sm:justify-end';

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

const inPageLinks = [
  { href: '#build-ideas', label: 'Build ideas' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#features', label: 'Features' },
  { href: '#roadmap', label: 'Roadmap' },
];

export function SiteFooter({ legal = false }: { legal?: boolean }) {
  return (
    <footer className="border-t border-grey-02">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-xs text-text-secondary sm:flex-row sm:items-start lg:px-8">
        {!legal && <span>{landingCopy.footerText}</span>}
        <div className="flex flex-col gap-2 sm:ml-auto sm:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            {!legal &&
              inPageLinks.map(({ href, label }) => (
                <FooterLink key={href} href={href}>
                  {label}
                </FooterLink>
              ))}
            <FooterLink external href={externalLinks.docs}>
              Docs <ExternalLink size={14} />
            </FooterLink>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <FooterLink href="/terms">Terms</FooterLink>
            <FooterLink href="/privacy">Privacy</FooterLink>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-end">
            <FooterLink external href={externalLinks.github}>
              GitHub <ExternalLink size={14} />
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
