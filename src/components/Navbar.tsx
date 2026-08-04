import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Link2, Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { BrandMark } from './BrandMark';
import { Button } from './Button';
import { RaspberryPiMark } from './RaspberryPiMark';

export function Navbar({ legal = false }: { legal?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className='fixed inset-x-0 top-0 z-50 border-b border-grey-06 bg-surface-inverse text-text-inverse'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-5 sm:py-5 lg:px-8'>
        <Link
          className='flex min-w-0 items-center gap-2 text-xl font-semibold sm:gap-4 sm:text-2xl'
          to='/'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <BrandMark size={28} />
          <div className='flex min-w-0 items-center gap-1'>
            <span className='truncate'>Edge Studio</span>
            <RaspberryPiMark />
            {/* <RaspberryPiMark variant='text' /> */}
          </div>
        </Link>
        <nav className='hidden items-center gap-5 text-sm lg:flex'>
          {legal ? (
            <Link
              className='flex items-center gap-2 text-grey-03 hover:text-core-white'
              to='/'
            >
              <ArrowLeft size={16} />
              Back to home
            </Link>
          ) : (
            <>
              <a
                className='hidden text-grey-03 hover:text-core-white sm:block'
                href='/#features'
              >
                Features
              </a>
              <a
                className='hidden text-grey-03 hover:text-core-white sm:block'
                href='/#roadmap'
              >
                Roadmap
              </a>
              <a
                className='hidden text-grey-03 hover:text-core-white sm:flex sm:items-center sm:gap-1'
                href='https://github.com'
                target='_blank'
                rel='noreferrer'
              >
                <span>View on GitHub</span>
                <ExternalLink size={15} />
              </a>
              <Button iconEnd={<Link2 size={16} />} size='sm' variant='accent'>
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
          className='rounded border border-grey-06 p-2 text-grey-03 hover:text-core-white lg:hidden'
          onClick={() => setMenuOpen((open) => !open)}
          type='button'
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className='fixed inset-0 z-40 bg-black/50 lg:hidden' initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={reduceMotion ? undefined : { opacity: 0 }} transition={{ duration: 0.2 }}>
          <motion.nav className='absolute inset-0 flex flex-col gap-6 bg-surface-inverse px-6 pb-8 pt-28 text-lg sm:left-auto sm:w-80 sm:border-l sm:border-grey-06' initial={reduceMotion ? false : { x: '4%', opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={reduceMotion ? undefined : { x: '4%', opacity: 0 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
            <button
              aria-label='Close navigation menu'
              className='absolute right-6 top-6 rounded border border-grey-06 p-2 text-grey-03 hover:text-core-white'
              onClick={closeMenu}
              type='button'
            >
              <X size={20} />
            </button>
            {legal ? (
              <Link
                className='flex items-center gap-2 text-grey-03 hover:text-core-white'
                onClick={closeMenu}
                to='/'
              >
                <ArrowLeft size={18} />
                Back to home
              </Link>
            ) : (
              <>
                <a
                  className='text-grey-03 hover:text-core-white'
                  href='/#features'
                  onClick={closeMenu}
                >
                  Features
                </a>
                <a
                  className='text-grey-03 hover:text-core-white'
                  href='/#roadmap'
                  onClick={closeMenu}
                >
                  Roadmap
                </a>
                <a
                  className='flex items-center gap-1 text-grey-03 hover:text-core-white'
                  href='https://github.com'
                  onClick={closeMenu}
                  rel='noreferrer'
                  target='_blank'
                >
                  <span>View on GitHub</span>
                  <ExternalLink size={16} />
                </a>
                <Button
                  iconEnd={<Link2 size={16} />}
                  onClick={closeMenu}
                  size='sm'
                  variant='accent'
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
