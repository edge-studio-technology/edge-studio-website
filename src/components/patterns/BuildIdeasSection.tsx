import { Bot, Camera, CloudSun, Factory, Gauge, Lightbulb } from 'lucide-react';

const PAUSE_ON_HOVER = false;

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

function ProjectIdeaCards({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="build-ideas-carousel-group"
    >
      {buildIdeas.map(({ title, text, Icon }) => (
        <article
          className="build-ideas-card group flex min-h-64 w-[min(20rem,calc(100vw-3rem))] shrink-0 flex-col justify-between rounded-soft border border-grey-02 bg-core-white p-6 sm:w-80 lg:w-[22rem]"
          key={title}
        >
          <div className="flex items-start justify-between gap-4">
            <Icon aria-hidden="true" className="text-brand-01" size={30} />
            <span className="rounded-full border border-grey-02 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary">
              Project idea
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-3 leading-relaxed text-text-secondary">{text}</p>
          </div>
        </article>
      ))}

      <aside className="build-ideas-card flex min-h-64 w-[min(20rem,calc(100vw-3rem))] shrink-0 flex-col justify-between rounded-soft border border-brand-01/30 bg-brand-01 p-6 text-core-white sm:w-80 lg:w-[22rem]">
        <Lightbulb aria-hidden="true" size={30} />
        <div>
          <h3 className="text-2xl font-semibold">Bring your own idea</h3>
          <p className="mt-3 leading-relaxed text-core-white/80">
            Start with a project that already creates useful data, then decide
            where a verifiable record adds value.
          </p>
        </div>
      </aside>
    </div>
  );
}

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

        <div
          aria-label={
            PAUSE_ON_HOVER
              ? 'Project ideas carousel. Focus or hover to pause and enlarge cards.'
              : 'Project ideas carousel.'
          }
          className="build-ideas-carousel mt-12 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-01"
          data-pause-on-hover={PAUSE_ON_HOVER}
          role="region"
          tabIndex={0}
        >
          <div className="build-ideas-carousel-track">
            <ProjectIdeaCards />
            <ProjectIdeaCards duplicate />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-grey-02 pt-6">
          <span className="mr-2 text-xs font-semibold uppercase tracking-[0.14em] text-text-secondary">
            More project ideas
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
