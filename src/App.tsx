import { useState } from 'react';
import { Check, Image, LayoutDashboard, Link2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { CopyableCode } from './components/CopyableCode';
import { Navbar } from './components/Navbar';
import { RoadmapTimeline } from './components/RoadmapTimeline';
import { features, landingCopy, roadmap } from './constants/landing';

function DashboardPreview({
  className = '',
  description = landingCopy.previewText,
  title = landingCopy.previewTitle,
}: {
  className?: string;
  description?: string;
  title?: string;
}) {
  return (
    <div
      className={`flex aspect-16/10 flex-col items-center justify-center border-2 border-dashed border-grey-04 bg-grey-02 p-6 text-center text-text-secondary sm:p-10 ${className}`}
    >
      <Image size={48} strokeWidth={1.25} />
      <strong className='mt-4 text-lg text-text-primary'>{title}</strong>
      <span className='mt-2 max-w-xs text-sm'>{description}</span>
      <span className='mt-4 rounded-full bg-core-white px-3 py-1 font-mono text-[10px]'>
        image placeholder
      </span>
    </div>
  );
}

function App() {
  const [activeFeature, setActiveFeature] = useState(0);
  return (
    <div className='min-h-screen bg-grey-01 text-text-primary'>
      <Navbar />
      <main id='top'>
        <section className='relative overflow-hidden'>
          <div className='pointer-events-none absolute inset-0 bg-[linear-gradient(#e6e8ea_1px,transparent_1px),linear-gradient(90deg,#e6e8ea_1px,transparent_1px)] bg-size-[48px_48px]' />
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-b from-transparent to-grey-01' />
          <div className='relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28'>
            <div>
              <span className='flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-01'>
                <Check size={15} /> {landingCopy.eyebrow}
              </span>
              <h1 className='type-display mt-5 max-w-xl text-5xl sm:text-6xl'>
                {landingCopy.heroTitle}{' '}
                <span className='text-brand-01'>{landingCopy.heroAccent}</span>
              </h1>
              <p className='type-callout mt-6 max-w-xl text-text-secondary'>
                {landingCopy.heroText}
              </p>
              <div className='mt-8 flex flex-wrap items-center gap-5'>
                <Button variant='accent' iconEnd={<Link2 size={16} />}>
                  {landingCopy.docsLink}
                </Button>
                <a
                  href='https://github.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-sm underline'
                >
                  {landingCopy.githubLink}
                </a>
              </div>
            </div>
            <div className='rounded-soft border-4 border-core-black bg-grey-06 p-2 shadow-[0_24px_70px_-24px_rgba(0,0,0,0.6)]'>
              <div className='flex items-center gap-1.5 px-3 py-2 text-[10px] text-grey-03'>
                <i className='size-2 rounded-full bg-feedback-error' />
                <i className='size-2 rounded-full bg-feedback-warning' />
                <i className='size-2 rounded-full bg-feedback-positive' />
                <span className='ml-2'>edge-studio / overview</span>
              </div>
              <DashboardPreview />
            </div>
          </div>
          <div className='relative z-10 mx-auto max-w-6xl px-5 pb-12 lg:px-8'>
            <div className='mb-3 flex justify-between text-xs font-semibold'>
              <span>{landingCopy.installTitle}</span>
              <a className='underline' href='#install'>
                {landingCopy.installLink}
              </a>
            </div>
            <div className='rounded-soft border border-grey-03 bg-core-black p-3 font-mono text-xs text-core-white sm:grid-cols-[1fr_auto] sm:items-center'>
              <CopyableCode
                value={
                  'git clone <your-fork-or-repo> edge-studio\ncd edge-studio && ./install.sh'
                }
              />
            </div>
          </div>
        </section>
        <section
          id='features'
          className='mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28'
        >
          <div className='mb-10'>
            <span className='text-xs font-semibold uppercase tracking-[0.16em] text-brand-01'>
              {landingCopy.featuresEyebrow}
            </span>
            <h2 className='type-heading mt-4 max-w-2xl text-4xl'>
              {landingCopy.featuresTitle}
            </h2>
          </div>
          <Card className='mb-6 grid gap-8 border border-grey-02 bg-core-white sm:grid-cols-[0.8fr_1.2fr]'>
            <div>
              <span className='mb-4 inline-flex rounded-full bg-brand-01 p-3 text-core-white'>
                <LayoutDashboard size={18} />
              </span>
              <h3 className='type-title'>{landingCopy.dashboardTitle}</h3>
              <p className='mt-2 text-sm text-text-secondary'>
                {landingCopy.dashboardText}
              </p>
            </div>
            <ul className='space-y-3 text-sm'>
              {landingCopy.dashboardBullets.map((item) => (
                <li className='flex items-center gap-3' key={item}>
                  <span className='rounded-full bg-feedback-positive p-1 text-core-white'>
                    <Check size={12} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <div className='grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
            <div className='hidden grid-cols-2 gap-3 lg:grid'>
              {features.map(({ title, text, Icon }, index) => (
                <button
                  aria-label={title}
                  title={title}
                  type='button'
                  className={`rounded-soft border p-5 text-left transition-colors ${activeFeature === index ? 'border-brand-01 bg-core-white' : 'border-grey-02 hover:border-grey-03'}`}
                  onClick={() => setActiveFeature(index)}
                  key={title}
                >
                  <span
                    className={`mb-4 inline-flex rounded-full p-2.5 ${activeFeature === index ? 'bg-brand-01 text-core-white' : 'bg-grey-02 text-brand-01'}`}
                  >
                    <Icon size={18} />
                  </span>
                  <h3 className='font-semibold'>{title}</h3>
                  <p className='mt-2 text-sm leading-relaxed text-text-secondary'>
                    {text}
                  </p>
                </button>
              ))}
            </div>
            <div className='lg:hidden'>
              <div className='hidden rounded-soft border border-grey-02 p-6 sm:block'>
                <div className='grid grid-cols-2 gap-3'>
                  {features.map(({ title, Icon }, index) => (
                    <button
                      aria-label={title}
                      className='flex items-center gap-3 text-left'
                      key={title}
                      onClick={() => setActiveFeature(index)}
                      type='button'
                    >
                      <span
                        className={`inline-flex rounded-full p-2.5 ${activeFeature === index ? 'bg-brand-01 text-core-white' : 'bg-grey-02 text-brand-01'}`}
                      >
                        <Icon size={18} />
                      </span>
                      <span className='font-semibold'>{title}</span>
                    </button>
                  ))}
                </div>
                <p className='mt-6 text-text-secondary'>
                  {features[activeFeature].text}
                </p>
              </div>
              <div className='sm:hidden'>
                <div className='mb-5 rounded-soft border border-grey-02 p-4'>
                  <div className='mb-4 grid grid-cols-4 justify-items-center gap-2'>
                    {features.map(({ title, Icon }, index) => (
                      <button
                        aria-label={title}
                        className='flex justify-center'
                        key={title}
                        onClick={() => setActiveFeature(index)}
                        type='button'
                      >
                        <span
                          className={`inline-flex rounded-full p-2.5 ${activeFeature === index ? 'bg-brand-01 text-core-white' : 'bg-grey-02 text-brand-01'}`}
                        >
                          <Icon size={18} />
                        </span>
                      </button>
                    ))}
                  </div>
                  <h3 className='type-title'>
                    {features[activeFeature].title}
                  </h3>
                  <p className='mt-2 text-text-secondary'>
                    {features[activeFeature].text}
                  </p>
                </div>
              </div>
              <div className='mt-6'>
                <DashboardPreview
                  description={features[activeFeature].detail}
                  title={features[activeFeature].title}
                />
              </div>
            </div>
            <div className='hidden lg:block'>
              <DashboardPreview
                className='h-full aspect-auto'
                description={features[activeFeature].detail}
                title={features[activeFeature].title}
              />
            </div>
          </div>
        </section>
        <section id='roadmap' className='bg-core-white'>
          <div className='mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28'>
            <div className='mb-10 max-w-2xl'>
              <span className='text-xs font-semibold uppercase tracking-[0.16em] text-brand-01'>
                {landingCopy.roadmapEyebrow}
              </span>
              <h2 className='type-heading mt-4 text-4xl'>
                {landingCopy.roadmapTitle}
              </h2>
              <p className='mt-4 text-text-secondary'>
                {landingCopy.roadmapText}
              </p>
            </div>
            <RoadmapTimeline items={roadmap} />
          </div>
        </section>
      </main>
      <footer className='border-t border-grey-02'>
        <div className='mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between lg:px-8'>
          <span>{landingCopy.footerText}</span>
          <div className='flex gap-5'>
            <a href='#features'>Features</a>
            <a href='#roadmap'>Roadmap</a>
            <Link to='/terms'>Terms</Link>
            <Link to='/privacy'>Privacy</Link>
            <a href='https://github.com' target='_blank' rel='noreferrer'>
              GitHub ↗
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
