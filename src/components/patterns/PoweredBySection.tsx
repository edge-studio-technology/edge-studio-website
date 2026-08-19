import { useEffect, useRef } from 'react';
import {
  motion,
  useAnimationControls,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react';
import { landingCopy } from '../../constants/landing';

const partners = [
  {
    href: 'https://integritas.technology/',
    iconSrc: '/integritas_logo/svg/integritas-gradient_icon.svg',
    name: 'Integritas',
    wordmarkSrc: '/integritas_logo/svg/integritas-gradient.svg',
  },
  {
    href: 'https://minima.global/',
    iconSrc: '/minima_logo/Black/svg/Minima Logo Mark 2023_Black.svg',
    name: 'Minima',
    wordmarkSrc: '/minima_logo/Black/svg/Minima Word Mark 2023_Black-01.svg',
  },
] as const;

function PartnerIcon({
  iconSrc,
  index,
  reduceMotion,
}: {
  iconSrc: string;
  index: number;
  reduceMotion: boolean;
}) {
  const controls = useAnimationControls();

  useEffect(() => {
    if (reduceMotion) {
      controls.set({ rotate: 0, y: 0 });
      return;
    }

    void controls.start({
      rotate: [0, -0.7, 0, 0.5, 0],
      y: [0, -5, 0, 2, 0],
      transition: {
        duration: 6.2 + index * 0.6,
        ease: 'easeInOut',
        repeat: Infinity,
        delay: index * 0.8,
      },
    });

    return () => controls.stop();
  }, [controls, index, reduceMotion]);

  return (
    <motion.div animate={controls} initial={false}>
      <img
        alt=""
        className="size-24 object-contain drop-shadow-[0_18px_16px_rgb(0_0_0/0.22)] sm:size-28"
        src={iconSrc}
      />
    </motion.div>
  );
}

export function PoweredBySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const shiftX = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 24,
  });
  const shiftY = useSpring(useMotionValue(0), {
    stiffness: 120,
    damping: 24,
  });

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduceMotion || event.pointerType === 'touch') return;
    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;
    shiftX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 8);
    shiftY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 8);
  }

  function handlePointerLeave() {
    shiftX.set(0);
    shiftY.set(0);
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="powered-by-title"
      className="border-b border-grey-02 bg-grey-01"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
    >
      <div className="mx-auto grid max-w-6xl lg:grid-cols-[0.8fr_1.2fr]">
        <div className="px-5 py-16 lg:px-8 lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
            {landingCopy.poweredByEyebrow}
          </span>
          <h2
            id="powered-by-title"
            className="type-heading mt-4 max-w-lg text-4xl text-balance"
          >
            {landingCopy.poweredByTitle}
          </h2>
          <p className="mt-4 max-w-lg text-text-secondary">
            {landingCopy.poweredByText}
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-6 sm:flex-row sm:py-10">
          {partners.map(({ href, iconSrc, name, wordmarkSrc }, index) => (
            <div
              className={`flex min-h-40 items-center justify-center px-2 sm:min-h-0 sm:w-48 sm:px-0 ${index === 0 ? 'sm:order-2 sm:-translate-y-5' : 'sm:order-1 sm:translate-y-5'}`}
              key={name}
            >
              <motion.a
                aria-label={`Visit the ${name} website`}
                className="inline-flex min-h-24 min-w-40 flex-col items-center justify-center gap-3 p-4 focus-visible:rounded-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-01"
                href={href}
                rel="noreferrer"
                style={{
                  x: reduceMotion ? 0 : shiftX,
                  y: reduceMotion ? 0 : shiftY,
                }}
                target="_blank"
              >
                <PartnerIcon
                  iconSrc={iconSrc}
                  index={index}
                  reduceMotion={Boolean(reduceMotion)}
                />
                <img
                  alt={`${name} logo`}
                  className="h-7 w-32 object-contain"
                  src={wordmarkSrc}
                />
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
