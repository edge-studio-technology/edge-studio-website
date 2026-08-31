import { Clock3, Fingerprint, History } from 'lucide-react';

const proofReasons = [
  {
    title: 'Where it came from',
    text: 'Link records back to the device or project that created them.',
    Icon: Fingerprint,
  },
  {
    title: 'When it happened',
    text: 'Preserve a timestamped history of physical-world events.',
    Icon: Clock3,
  },
  {
    title: 'Whether it changed',
    text: 'Make tampering or later edits visible instead of invisible.',
    Icon: History,
  },
] as const;

export function WhyProofSection() {
  return (
    <section
      id="why-proof"
      className="scroll-mt-20 border-b border-grey-02 bg-core-white sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
              Why proof?
            </span>
            <h2 className="type-heading mt-4 max-w-xl text-4xl">
              Your Pi already senses the world. Edge Studio helps it prove what
              happened.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-relaxed text-text-secondary">
            Weather stations, cameras, robots, energy monitors and home
            automation systems all produce useful data. Edge Studio helps that
            data carry proof with it.
          </p>
        </div>

        <div className="relative mt-12 grid gap-4 md:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-brand-01/25 md:block"
          />
          {proofReasons.map(({ title, text, Icon }) => (
            <article
              className="relative rounded-soft border border-grey-02 bg-grey-01 p-6"
              key={title}
            >
              <span className="relative z-10 grid size-14 place-items-center rounded-full border border-brand-01/25 bg-core-white text-brand-01">
                <Icon aria-hidden="true" size={24} />
              </span>
              <h3 className="mt-8 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-text-secondary">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
