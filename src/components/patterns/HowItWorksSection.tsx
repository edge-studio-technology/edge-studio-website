import {
  Cable,
  ChevronRight,
  Share2,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

const steps = [
  {
    label: 'Connect',
    text: 'Use a Pi project that already captures data, images or device events.',
    status: 'Available now',
    Icon: Cable,
  },
  {
    label: 'Automate',
    text: 'Build local workflows that trigger on events or schedules, process data and control outputs.',
    status: 'Available now',
    Icon: Workflow,
  },
  {
    label: 'Prove',
    text: 'Create a verifiable record for the selected files and workflow data that matter.',
    status: 'Available now',
    Icon: ShieldCheck,
  },
  {
    label: 'Share',
    text: 'Export or publish proof-backed data so others can trust the source.',
    status: 'Roadmap',
    Icon: Share2,
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

        <ol className="mt-12 grid gap-3 lg:grid-cols-4">
          {steps.map(({ label, text, status, Icon }, index) => (
            <li
              className="relative flex min-h-72 flex-col rounded-soft border border-grey-06 bg-grey-06/35 p-6"
              key={label}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-01 text-core-white">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <span
                  className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                    status === 'Available now'
                      ? 'border-feedback-positive/50 text-feedback-positive'
                      : 'border-brand-02/60 text-brand-02'
                  }`}
                >
                  {status}
                </span>
              </div>
              <span className="mt-auto font-mono text-xs text-grey-04">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-2xl font-semibold">{label}</h3>
              <p className="mt-3 leading-relaxed text-grey-03">{text}</p>
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 place-items-center rounded-full border border-grey-06 bg-core-black text-brand-02 lg:grid"
                >
                  <ChevronRight size={14} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
