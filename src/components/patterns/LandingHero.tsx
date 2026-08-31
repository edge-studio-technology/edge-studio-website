import { useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { Check, ExternalLink, Link2 } from 'lucide-react';
import { CopyableCode } from '../ui/CopyableCode';
import { FakeCursor } from '../ui/FakeCursor';
import { externalLinks, landingCopy } from '../../constants/landing';
import { cx } from '../../lib/cx';
import dashboardImage from '../../assets/images/es_dashboard.png';

export type LandingHeroBackground = 'grid' | 'violet';

function DashboardPreview() {
  return (
    <div className="relative overflow-hidden">
      <img
        src={dashboardImage}
        alt="Edge Studio dashboard with the guided workspace open"
        className="block h-auto w-full"
      />
      <FakeCursor
        points={[
          { x: '72%', y: '70%' },
          { x: '50%', y: '46%' },
          { x: '36%', y: '51%' },
          { x: '36%', y: '51%' },
        ]}
      />
    </div>
  );
}

export function LandingHero({
  background = 'grid',
}: {
  background?: LandingHeroBackground;
}) {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const hasVioletBackground = background === 'violet';
  const [active, setActive] = useState(false);
  const pointerX = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 28,
  });
  const pointerY = useSpring(useMotionValue(0), {
    stiffness: 180,
    damping: 28,
  });
  const glowX = useTransform(pointerX, (value) => value - 160);
  const glowY = useTransform(pointerY, (value) => value - 160);
  const circleCursorX = useTransform(pointerX, (value) => value - 224);
  const circleCursorY = useTransform(pointerY, (value) => value - 224);
  const gridHighlightMask = useMotionTemplate`radial-gradient(circle 180px at ${pointerX}px ${pointerY}px, black 0%, rgba(0, 0, 0, 0.8) 42%, transparent 72%)`;
  const parallaxX = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 24,
  });
  const parallaxY = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 24,
  });
  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === 'touch') return;
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    pointerX.set(x);
    pointerY.set(y);
    parallaxX.set((x / bounds.width - 0.5) * 8);
    parallaxY.set((y / bounds.height - 0.5) * 8);
    setActive(true);
  }

  function handlePointerEnter(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === 'touch') return;
    handlePointerMove(event);
    setActive(true);
  }

  function handlePointerLeave() {
    setActive(false);
    parallaxX.set(0);
    parallaxY.set(0);
  }

  const reveal = reduceMotion ? undefined : { opacity: 0, y: 18 };
  return (
    <section
      ref={heroRef}
      className={cx(
        'relative overflow-hidden border-b',
        hasVioletBackground
          ? 'border-grey-06 bg-core-black text-core-white'
          : 'border-grey-02',
      )}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      {hasVioletBackground ? (
        <>
          <div
            aria-hidden="true"
            className="hero-background-violet pointer-events-none absolute inset-0"
          />
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-0 z-[2] size-[28rem] rounded-full border-2 border-brand-02/35 bg-brand-01/5"
              style={{
                x: circleCursorX,
                y: circleCursorY,
              }}
              animate={{ opacity: active ? 0.8 : 0 }}
              transition={{ duration: active ? 0.2 : 0.15 }}
            />
          )}
        </>
      ) : (
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#e6e8ea_1px,transparent_1px),linear-gradient(90deg,#e6e8ea_1px,transparent_1px)] bg-size-[52px_52px]" />
      )}
      {!hasVioletBackground && !reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(rgba(109,72,220,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(109,72,220,0.42)_1px,transparent_1px)] bg-size-[52px_52px]"
            style={{
              maskImage: gridHighlightMask,
              WebkitMaskImage: gridHighlightMask,
            }}
            animate={{ opacity: active ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-[2] size-80 rounded-full blur-2xl"
            style={{
              x: glowX,
              y: glowY,
              background:
                'radial-gradient(circle, rgba(109,72,220,0.3), rgba(109,72,220,0.12) 42%, transparent 70%)',
            }}
            animate={{
              opacity: active ? [0.72, 0.9, 0.72] : 0,
              scale: active ? [1, 1.04, 1] : 0.96,
            }}
            transition={{
              duration: active ? 2.4 : 0.2,
              ease: 'easeInOut',
              repeat: active ? Infinity : 0,
            }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 z-[3] size-80 rounded-full border border-brand-01/25"
            style={{ x: glowX, y: glowY }}
            animate={{
              opacity: active ? 1 : 0,
              scale: active ? 1 : 0.96,
            }}
            transition={{ duration: 0.22 }}
          />
        </>
      )}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-28 lg:pb-16">
        <motion.div
          initial={reveal}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span
            className={cx(
              'flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em]',
              hasVioletBackground ? 'text-brand-02' : 'text-brand-01',
            )}
          >
            <Check size={15} /> {landingCopy.eyebrow}
          </span>
          <h1 className="type-display mt-5 max-w-xl text-5xl sm:text-6xl">
            {landingCopy.heroTitle}{' '}
            <span
              className={
                hasVioletBackground ? 'text-brand-02' : 'text-brand-01'
              }
            >
              {landingCopy.heroAccent}
            </span>
          </h1>
          <p
            className={cx(
              'type-callout mt-6 max-w-xl',
              hasVioletBackground ? 'text-grey-03' : 'text-text-secondary',
            )}
          >
            {landingCopy.heroText}
          </p>
          <p
            className={cx(
              'mt-4 max-w-xl text-sm font-semibold',
              hasVioletBackground ? 'text-core-white' : 'text-text-primary',
            )}
          >
            {landingCopy.heroSupport}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              className="gap-detail-next rounded-loose inline-flex h-11 w-fit cursor-pointer items-center justify-center overflow-clip border border-transparent bg-surface-accent px-detail-close type-body text-text-inverse transition-colors duration-200 hover:bg-surface-accent-hover focus-visible:ring-2 focus-visible:ring-stroke-active focus-visible:outline-none"
              href={externalLinks.docs}
              target="_blank"
              rel="noreferrer"
            >
              {landingCopy.docsLink}
              <Link2 size={16} />
            </a>
            <a
              href={externalLinks.github}
              target="_blank"
              rel="noreferrer"
              className={cx(
                'inline-flex min-h-11 items-center gap-1 border-b text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01',
                hasVioletBackground
                  ? 'border-core-white text-core-white'
                  : 'border-text-primary',
              )}
            >
              {landingCopy.githubLink}
              <ExternalLink size={15} />
            </a>
          </div>
        </motion.div>
        <motion.div
          style={{
            x: reduceMotion ? 0 : parallaxX,
            y: reduceMotion ? 0 : parallaxY,
          }}
        >
          <div className="hero-preview-frame rounded-soft p-2">
            <div className="flex items-center gap-1.5 px-3 py-2 text-[10px] text-text-secondary">
              <i className="size-2 rounded-full bg-feedback-error" />
              <i className="size-2 rounded-full bg-feedback-warning" />
              <i className="size-2 rounded-full bg-feedback-positive" />
              <span className="ml-2">edge-studio / overview</span>
            </div>
            <DashboardPreview />
          </div>
        </motion.div>
      </div>
      <div
        id="install"
        className="relative z-10 mx-auto max-w-6xl scroll-mt-20 px-5 pb-20 sm:scroll-mt-24 lg:px-8 lg:pb-28"
      >
        <div className="relative">
          <h2 className="type-callout relative z-10 w-fit rounded-t-soft bg-core-black px-5 py-3 text-core-white">
            {landingCopy.installTitle}
          </h2>

          <div className="-mt-px rounded-b-soft rounded-tr-soft border border-core-black bg-core-black p-3 font-mono text-xs text-core-white">
            <CopyableCode
              value={
                'curl -fsSL https://raw.githubusercontent.com/edge-studio-technology/edge-studio/main/install.sh | sudo bash'
              }
            />

            <p
              className={cx(
                'mt-3 px-1.5 text-xs',
                hasVioletBackground ? 'text-grey-03' : 'text-text-secondary',
              )}
            >
              {landingCopy.installText}
            </p>
          </div>
          <a
            className={cx(
              'mt-2 ml-auto flex min-h-11 w-fit items-center gap-1 rounded-tight text-sm underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01 sm:absolute sm:top-0 sm:right-0 sm:mt-0',
              hasVioletBackground && 'text-core-white',
            )}
            href={externalLinks.installScript}
            target="_blank"
            rel="noreferrer"
          >
            {landingCopy.installLink}
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
