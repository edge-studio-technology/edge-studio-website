import { useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Check, Image, LayoutDashboard } from 'lucide-react';
import { Card } from '../ui/Card';
import { features, landingCopy } from '../../constants/landing';

const tabColumns = [
  'calc(100% - 12.75rem) 3.5rem 3.5rem 3.5rem',
  '3.5rem calc(100% - 12.75rem) 3.5rem 3.5rem',
  '3.5rem 3.5rem calc(100% - 12.75rem) 3.5rem',
  '3.5rem 3.5rem 3.5rem calc(100% - 12.75rem)',
] as const;

function Preview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex h-full flex-col items-center justify-center border-2 border-dashed border-grey-04 bg-grey-02 p-6 text-center text-grey-06/80">
      <Image size={48} strokeWidth={1.25} />
      <strong className="mt-4 text-lg text-text-primary">{title}</strong>
      <span className="mt-2 max-w-xs text-sm">{description}</span>
    </div>
  );
}

export function FeatureSection() {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const feature = features[active];
  const FeatureIcon = feature.Icon;

  return (
    <section
      id="features"
      className="mx-auto max-w-6xl scroll-mt-20 border-b border-grey-02 px-5 py-20 sm:scroll-mt-24 lg:px-8 lg:py-28"
    >
      <div className="mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
          {landingCopy.featuresEyebrow}
        </span>
        <h2 className="type-heading mt-4 max-w-2xl text-4xl">
          {landingCopy.featuresTitle}
        </h2>
      </div>
      <Card className="mb-8 grid gap-8 border border-grey-02 bg-core-white sm:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="mb-4 inline-flex rounded-full bg-brand-01 p-3 text-core-white">
            <LayoutDashboard size={18} />
          </span>
          <h3 className="type-title">{landingCopy.dashboardTitle}</h3>
          <p className="mt-2 text-sm text-text-secondary">
            {landingCopy.dashboardText}
          </p>
        </div>
        <ul className="space-y-3 text-sm">
          {landingCopy.dashboardBullets.map((item) => (
            <li className="flex items-center gap-3" key={item}>
              <span className="rounded-full bg-feedback-positive p-1 text-core-white">
                <Check size={12} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Card>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="flex flex-col rounded-soft border border-grey-02 bg-core-white p-6 sm:p-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={feature.title}
              className="flex min-h-0 flex-1 flex-col items-center justify-center text-center lg:items-start lg:text-left"
              initial={
                reduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion ? undefined : { opacity: 0, y: -18, scale: 1.02 }
              }
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <motion.span
                className="inline-flex w-fit rounded-full bg-brand-01 p-3 text-core-white shadow-sm"
                initial={reduceMotion ? false : { rotate: -8, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ duration: 0.35, ease: 'backOut' }}
              >
                <FeatureIcon size={26} />
              </motion.span>
              <h3 className="mt-5 min-h-[2.25rem] text-2xl font-semibold">
                {feature.title}
              </h3>
              <p className="mt-3 min-h-[3.5rem] max-w-md text-base leading-relaxed text-text-secondary">
                {feature.detail}
              </p>
            </motion.div>
          </AnimatePresence>
          <div
            className="feature-tabs mt-6 h-14"
            style={
              {
                '--feature-tab-columns': tabColumns[active],
              } as CSSProperties
            }
          >
            {features.map(({ title, Icon }, index) => {
              const isActive = active === index;
              return (
                <button
                  type="button"
                  aria-label={title}
                  aria-pressed={isActive}
                  data-active={isActive}
                  onClick={() => setActive(index)}
                  key={title}
                  className={`feature-tab relative h-14 min-w-0 overflow-hidden rounded-soft border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01 ${isActive ? 'border-brand-01 bg-core-white text-brand-01' : 'border-transparent text-text-secondary hover:border-grey-03 hover:bg-grey-01'}`}
                >
                  <span className="feature-tab-icon absolute top-1/2 flex size-5 items-center justify-center">
                    <Icon size={20} />
                  </span>
                  <span className="feature-tab-label absolute inset-y-0 left-12 right-3 hidden min-w-0 items-center justify-center overflow-hidden whitespace-nowrap text-sm font-semibold sm:flex">
                    {title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="h-80 overflow-hidden sm:h-96 lg:h-auto">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={feature.title}
              className="h-full"
              initial={reduceMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <Preview title={feature.title} description={feature.detail} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
