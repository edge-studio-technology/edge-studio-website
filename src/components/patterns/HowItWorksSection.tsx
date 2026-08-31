import { ChevronRight } from 'lucide-react';

const steps = [
  {
    label: 'Connect',
    text: 'Use a Pi project that already captures data, images or device events.',
    status: 'Available now',
  },
  {
    label: 'Automate',
    text: 'Build local workflows that trigger on events or schedules, process data and control outputs.',
    status: 'Available now',
  },
  {
    label: 'Prove',
    text: 'Create a verifiable record for the selected files and workflow data that matter.',
    status: 'Available now',
  },
  {
    label: 'Share',
    text: 'Export or publish proof-backed data so others can trust the source.',
    status: 'Roadmap',
  },
] as const;

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-20 border-b border-grey-06 bg-core-black text-core-white sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-02">
          How Edge Studio works
        </span>
        <h2 className="type-heading mt-4 max-w-3xl text-4xl">
          Start with something you are already building, then add a proof layer.
        </h2>

        <ol className="mt-12 grid gap-6 px-3 sm:px-5 lg:grid-cols-4 lg:gap-3 lg:px-0">
          {steps.map(({ label, text, status }, index) => (
            <li
              className="relative flex min-h-64 w-full max-w-xl justify-self-center flex-col rounded-soft border border-grey-06 bg-grey-06/35 p-6 lg:min-h-72 lg:max-w-none"
              key={label}
            >
              <h3 className="text-2xl font-semibold">{label}</h3>
              <span
                className={`mt-3 w-fit rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                  status === 'Available now'
                    ? 'border-feedback-positive/50 text-feedback-positive'
                    : 'border-brand-02/60 text-brand-02'
                }`}
              >
                {status}
              </span>
              <p className="mt-5 leading-relaxed text-grey-03">{text}</p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -bottom-8 left-1/2 z-50 grid size-10 -translate-x-1/2 place-items-center rounded-full border border-grey-06 bg-core-black text-brand-02 lg:-right-[26px] lg:bottom-auto lg:left-auto lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2"
                >
                  <ChevronRight className="rotate-90 lg:rotate-0" size={22} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
