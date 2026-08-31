import { Bot, Camera, CloudSun, Factory, Gauge, Lightbulb } from 'lucide-react';

const buildIdeas = [
  {
    title: 'Verified weather station',
    text: 'Publish environmental readings with a checkable history.',
    Icon: CloudSun,
  },
  {
    title: 'Verified AI camera',
    text: 'Show when an image, event or inference was captured.',
    Icon: Camera,
  },
  {
    title: 'Machine passport',
    text: 'Give a device its own operating and maintenance record.',
    Icon: Bot,
  },
  {
    title: 'Verified energy monitor',
    text: 'Create trusted charging, usage or generation data.',
    Icon: Gauge,
  },
  {
    title: 'Verified supply-chain tracker',
    text: 'Prove location, condition and custody events from the edge.',
    Icon: Factory,
  },
] as const;

const otherPrompts = [
  'MQTT sensor network',
  'Home automation workflow',
  'Robot event log',
  'Lab experiment record',
  'Greenhouse monitor',
] as const;

export function BuildIdeasSection() {
  return (
    <section
      id="build-ideas"
      className="scroll-mt-20 border-b border-grey-02 bg-grey-01 sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
          Start with a normal Pi project
        </span>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <h2 className="type-heading max-w-xl text-4xl">
            Proof becomes useful when it is attached to real projects.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
            The easiest entry point is not an abstract platform demo. It is a Pi
            build where proof makes the result more valuable.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {buildIdeas.map(({ title, text, Icon }, index) => (
            <article
              className={`group flex min-h-64 flex-col justify-between rounded-soft border p-6 transition-transform duration-200 motion-reduce:transition-none ${
                index === 0
                  ? 'border-core-black bg-core-black text-core-white lg:col-span-2'
                  : 'border-grey-02 bg-core-white lg:col-span-2 hover:-translate-y-1'
              }`}
              key={title}
            >
              <div className="flex items-start justify-between gap-4">
                <Icon
                  aria-hidden="true"
                  className={index === 0 ? 'text-brand-02' : 'text-brand-01'}
                  size={30}
                />
                <span
                  className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] ${
                    index === 0
                      ? 'border-grey-06 text-grey-03'
                      : 'border-grey-02 text-text-secondary'
                  }`}
                >
                  Project idea
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    index === 0 ? 'text-grey-03' : 'text-text-secondary'
                  }`}
                >
                  {text}
                </p>
              </div>
            </article>
          ))}

          <aside className="flex min-h-64 flex-col justify-between rounded-soft border border-brand-01/30 bg-brand-01 p-6 text-core-white lg:col-span-2">
            <Lightbulb aria-hidden="true" size={30} />
            <div>
              <h3 className="text-2xl font-semibold">Bring your own idea</h3>
              <p className="mt-3 leading-relaxed text-core-white/80">
                Start with a project that already creates useful data, then
                decide where a verifiable record adds value.
              </p>
            </div>
          </aside>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-grey-02 pt-6">
          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
            More prompts
          </span>
          {otherPrompts.map((prompt) => (
            <span
              className="rounded-full border border-grey-02 bg-core-white px-3 py-1.5 text-sm"
              key={prompt}
            >
              {prompt}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
