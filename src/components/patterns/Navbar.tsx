import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Link2, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BrandMark } from '../ui/BrandMark';
import { Button } from '../ui/Button';
import { RaspberryPiMark } from '../ui/RaspberryPiMark';

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
    <header className="sticky inset-x-0 top-0 z-50  bg-surface-inverse text-text-inverse">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 lg:px-8">
        <Link
          className="flex min-h-11 min-w-0 items-center gap-2 rounded-tight text-xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:gap-4 sm:text-2xl"
          to="/"
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
            <RaspberryPiMark />
            {/* <RaspberryPiMark variant='text' /> */}
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {legal ? (
            <Link
              className="flex min-h-11 items-center gap-2 rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
              to="/"
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          ) : (
            <>
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
                className="hidden min-h-11 items-center gap-1 rounded-tight px-1 text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white sm:flex"
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                <span>View on GitHub</span>
                <ExternalLink size={15} />
              </a>
              <Button
                className="focus-visible:ring-core-white"
                iconEnd={<Link2 size={16} />}
                size="sm"
                variant="accent"
              >
                Docs
              </Button>
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
                <Link
                  className="flex min-h-11 items-center gap-2 rounded-tight text-grey-03 hover:text-core-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-core-white"
                  onClick={closeMenu}
                  to="/"
                >
                  <ArrowLeft size={18} />
                  Back to home
                </Link>
              ) : (
                <>
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
                    href="https://github.com"
                    onClick={closeMenu}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>View on GitHub</span>
                    <ExternalLink size={16} />
                  </a>
                  <Button
                    className="focus-visible:ring-core-white"
                    iconEnd={<Link2 size={16} />}
                    onClick={closeMenu}
                    variant="accent"
                  >
                    Docs
                  </Button>
                </>
              )}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
