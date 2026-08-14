import { motion, useReducedMotion } from 'motion/react';

type CursorPoint = {
  x: string;
  y: string;
};

export function FakeCursor({
  points,
  className = '',
}: {
  points: readonly CursorPoint[];
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const restingPoint = points.at(-1) ?? { x: '50%', y: '50%' };

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 drop-shadow-[0_2px_2px_rgb(0_0_0/0.35)] ${className}`}
      initial={false}
      animate={
        reduceMotion
          ? { left: restingPoint.x, top: restingPoint.y }
          : {
              left: points.map(({ x }) => x),
              top: points.map(({ y }) => y),
              scale: points.map((_, index) =>
                index === points.length - 2 ? 0.82 : 1,
              ),
            }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 4.8,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 0.8,
              times: points.map((_, index) => index / (points.length - 1)),
            }
      }
    >
      <svg viewBox="0 0 28 30" className="h-7 w-7 sm:h-8 sm:w-8" fill="none">
        <path
          d="M4.2 3.8c-.25-1.3 1.18-2.18 2.27-1.43l17.05 11.7c1.17.8.8 2.61-.6 2.9l-7.68 1.58-4.48 7.05c-.75 1.18-2.57.76-2.73-.63L4.2 3.8Z"
          fill="white"
          stroke="black"
          strokeLinejoin="round"
          strokeWidth="2.4"
        />
      </svg>
    </motion.div>
  );
}
