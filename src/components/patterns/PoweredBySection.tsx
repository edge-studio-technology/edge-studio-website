import { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, useAnimationControls, useReducedMotion } from 'motion/react';
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
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="powered-by-title"
      className="border-b border-grey-02 bg-grey-01"
    >
      <div className="mx-auto grid max-w-6xl px-5 py-20 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-28">
        <div>
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

        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:mt-16 sm:flex-row sm:items-stretch sm:gap-6 lg:mt-0">
          {partners.map(({ href, iconSrc, name, wordmarkSrc }, index) => (
            <motion.a
              className={`group relative flex w-full max-w-xs flex-col items-center gap-5 rounded-soft border border-grey-02 bg-core-white p-6 transition-colors duration-300 hover:border-brand-01/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-01 sm:w-56 ${index === 0 ? 'sm:order-2 sm:-translate-y-5' : 'sm:order-1 sm:translate-y-5'}`}
              href={href}
              key={name}
              rel="noreferrer"
              target="_blank"
              whileHover={reduceMotion ? undefined : { y: -4 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
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
              <span className="flex w-full items-center justify-center gap-1.5 border-t border-grey-02 pt-4 text-sm font-medium text-brand-01">
                Learn about {name}
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={16}
                />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
