import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { externalLinks, landingCopy } from '../../constants/landing';

export function SiteFooter({ legal = false }: { legal?: boolean }) {
  const linkClass =
    'inline-flex min-h-11 min-w-11 items-center justify-center rounded-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01';

  return (
    <footer className="border-t border-grey-02">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between lg:px-8">
        {!legal && <span>{landingCopy.footerText}</span>}
        <div className="flex flex-wrap gap-x-5">
          {!legal && (
            <>
              <a className={linkClass} href="#features">
                Features
              </a>
              <a className={linkClass} href="#roadmap">
                Roadmap
              </a>
            </>
          )}
          <Link className={linkClass} to="/terms">
            Terms
          </Link>
          <Link className={linkClass} to="/privacy">
            Privacy
          </Link>
          <a
            className={`${linkClass} gap-1`}
            href={externalLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
