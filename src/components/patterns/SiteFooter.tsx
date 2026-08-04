import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { landingCopy } from '../../constants/landing';

export function SiteFooter({ legal = false }: { legal?: boolean }) {
  return <footer className='border-t border-grey-02'><div className='mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between lg:px-8'>{!legal && <span>{landingCopy.footerText}</span>}<div className='flex gap-5'><>{!legal && <><a href='#features'>Features</a><a href='#roadmap'>Roadmap</a></>}</><Link to='/terms'>Terms</Link><Link to='/privacy'>Privacy</Link><a className='inline-flex items-center gap-1' href='https://github.com' target='_blank' rel='noreferrer'>GitHub <ExternalLink size={14} /></a></div></div></footer>;
}
