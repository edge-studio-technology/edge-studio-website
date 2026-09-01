import { useEffect, useState } from 'react';
import { ArrowLeft, ExternalLink, Link2, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BrandMark } from '../ui/BrandMark';
import { GithubMark } from '../ui/GithubMark';
// import { RaspberryPiMark } from '../ui/RaspberryPiMark';
import { externalLinks } from '../../constants/landing';

export function Navbar({ legal = false }: { legal?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky inset-x-0 top-0 z-[100] bg-surface-inverse text-text-inverse">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        <a
          className="flex min-h-11 min-w-0 items-center gap-2 rounded-tight text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:gap-4 sm:text-2xl"
          href="/"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: reduceMotion ? 'auto' : 'smooth',
            })
          }
        >
          <BrandMark size={28} />
          <div className="flex min-w-0 items-center gap-1">
            <span className="truncate">Edge Studio</span>
            {/* <RaspberryPiMark /> */}
            {/* <RaspberryPiMark variant='text' /> */}
          </div>
        </a>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {legal ? (
            <a
              className="flex min-h-11 items-center gap-2 rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
              href="/"
            >
              <ArrowLeft size={16} />
              Back to home
            </a>
          ) : (
            <>
              <a
                className="hidden min-h-11 items-center rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:flex"
                href="/#build-ideas"
              >
                Build ideas
              </a>
              <a
                className="hidden min-h-11 items-center rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:flex"
                href="/#how-it-works"
              >
                How it works
              </a>
              <a
                className="hidden min-h-11 items-center rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:flex"
                href="/#features"
              >
                Features
              </a>
              <a
                className="hidden min-h-11 items-center rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:flex"
                href="/#roadmap"
              >
                Roadmap
              </a>
              <a
                className="gap-detail-next rounded-loose inline-flex h-8 w-fit items-center justify-center overflow-clip border border-transparent bg-surface-accent px-detail-close type-meta text-text-inverse transition-colors duration-200 hover:bg-surface-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                href={externalLinks.docs}
                target="_blank"
                rel="noreferrer"
              >
                Docs <Link2 size={16} />
              </a>
              <a
                aria-label="View on GitHub"
                className="hidden size-11 items-center justify-center rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:flex"
                href={externalLinks.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubMark size={20} />
              </a>
            </>
          )}
        </nav>
        <button
          aria-expanded={menuOpen}
          aria-label={
            menuOpen ? 'Close navigation menu' : 'Open navigation menu'
          }
          className="grid size-11 place-items-center rounded-soft border border-grey-06 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={closeMenu}
            transition={{ duration: 0.2 }}
          >
            <motion.nav
              className="absolute inset-0 flex flex-col gap-6 bg-surface-inverse px-6 pb-8 pt-28 text-lg sm:left-auto sm:w-80 sm:border-l sm:border-grey-06"
              initial={reduceMotion ? false : { x: '4%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={reduceMotion ? undefined : { x: '4%', opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                aria-label="Close navigation menu"
                className="absolute right-6 top-6 grid size-11 place-items-center rounded-soft border border-grey-06 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                onClick={closeMenu}
                type="button"
              >
                <X size={20} />
              </button>
              {legal ? (
                <a
                  className="flex min-h-11 items-center gap-2 rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                  href="/"
                  onClick={closeMenu}
                >
                  <ArrowLeft size={18} />
                  Back to home
                </a>
              ) : (
                <>
                  <a
                    className="flex min-h-11 items-center rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                    href="/#build-ideas"
                    onClick={closeMenu}
                  >
                    Build ideas
                  </a>
                  <a
                    className="flex min-h-11 items-center rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                    href="/#how-it-works"
                    onClick={closeMenu}
                  >
                    How it works
                  </a>
                  <a
                    className="flex min-h-11 items-center rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                    href="/#features"
                    onClick={closeMenu}
                  >
                    Features
                  </a>
                  <a
                    className="flex min-h-11 items-center rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                    href="/#roadmap"
                    onClick={closeMenu}
                  >
                    Roadmap
                  </a>
                  <a
                    className="flex min-h-11 items-center gap-1 rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                    href={externalLinks.docs}
                    onClick={closeMenu}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Docs</span>
                    <ExternalLink size={16} />
                  </a>
                  <a
                    className="flex min-h-11 items-center gap-1 rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                    href={externalLinks.github}
                    onClick={closeMenu}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink size={16} />
                  </a>
                </>
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
