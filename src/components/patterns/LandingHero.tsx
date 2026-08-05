import { useRef, useState } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'motion/react';
import { Check, ExternalLink, Image, Link2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { CopyableCode } from '../ui/CopyableCode';
import { landingCopy } from '../../constants/landing';

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
      className={`flex aspect-16/10 flex-col items-center justify-center border-2 border-dashed border-grey-04 bg-grey-02 p-6 text-center text-grey-06/80 sm:p-10 ${className}`}
    >
      <Image size={48} strokeWidth={1.25} />
      <strong className="mt-4 text-lg text-text-primary">{title}</strong>
      <span className="mt-2 max-w-xs text-sm">{description}</span>
      <span className="mt-4 rounded-full bg-core-white px-3 py-1 font-mono text-[10px]">
        image placeholder
      </span>
    </div>
  );
}

export function LandingHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
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
      className="relative overflow-hidden border-b border-grey-02"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(#e6e8ea_1px,transparent_1px),linear-gradient(90deg,#e6e8ea_1px,transparent_1px)] bg-size-[48px_48px]" />
      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(rgba(109,72,220,0.42)_1px,transparent_1px),linear-gradient(90deg,rgba(109,72,220,0.42)_1px,transparent_1px)] bg-size-[48px_48px]"
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-48 bg-linear-to-b from-transparent to-grey-01" />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 pt-20 pb-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pt-28 lg:pb-16">
        <motion.div
          initial={reveal}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
            <Check size={15} /> {landingCopy.eyebrow}
          </span>
          <h1 className="type-display mt-5 max-w-xl text-5xl sm:text-6xl">
            {landingCopy.heroTitle}{' '}
            <span className="text-brand-01">{landingCopy.heroAccent}</span>
          </h1>
          <p className="type-callout mt-6 max-w-xl text-text-secondary">
            {landingCopy.heroText}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button variant="accent" iconEnd={<Link2 size={16} />}>
              {landingCopy.docsLink}
            </Button>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center gap-1 rounded-tight border-b border-text-primary text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01"
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
      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 lg:px-8 lg:pb-28">
        <div className="relative">
          <h2 className="type-callout relative z-10 w-fit rounded-t-soft bg-core-black px-5 py-3 text-core-white">
            {landingCopy.installTitle}
          </h2>
          <div className="-mt-px rounded-b-soft rounded-tr-soft border border-core-black bg-core-black p-3 font-mono text-xs text-core-white">
            <CopyableCode
              value={
                'git clone <your-fork-or-repo> edge-studio\ncd edge-studio && ./install.sh'
              }
            />
          </div>
          <a
            className="mt-2 ml-auto flex min-h-11 w-fit items-center gap-1 rounded-tight text-sm underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-01 sm:absolute sm:top-0 sm:right-0 sm:mt-0"
            href="#install"
          >
            {landingCopy.installLink}
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
