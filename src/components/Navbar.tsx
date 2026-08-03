import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { Button } from './Button';
import { RaspberryPiMark } from './RaspberryPiMark';

export function Navbar({ legal = false }: { legal?: boolean }) {
  return (
    <header className='sticky top-0 z-50 border-b border-grey-06 bg-surface-inverse text-text-inverse'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-5 lg:px-8'>
        <Link className='flex items-center gap-4 text-2xl font-semibold' to='/'>
          <BrandMark size={32} />
          <div className='flex items-center gap-1'>
            <span>Edge Studio</span>
            <RaspberryPiMark variant='text' />
          </div>
        </Link>
        <nav className='flex items-center gap-5 text-sm'>
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
                href='https://github.com'
                target='_blank'
                rel='noreferrer'
              >
                View on GitHub
              </a>
              <Button size='sm' variant='accent'>
                Docs
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
