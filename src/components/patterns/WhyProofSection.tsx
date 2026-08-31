import proofOriginImage from '../../assets/images/es_proof_01.jpg';
import proofTimeImage from '../../assets/images/es_proof_02.jpg';
import proofIntegrityImage from '../../assets/images/es_proof_03.jpg';

const proofReasons = [
  {
    title: 'Where it came from',
    text: 'Link records back to the device or project that created them.',
    image: proofOriginImage,
    imageAlt: 'Abstract fingerprint pattern',
  },
  {
    title: 'When it happened',
    text: 'Preserve a timestamped history of physical-world events.',
    image: proofTimeImage,
    imageAlt: 'Clock on a vivid orange background',
  },
  {
    title: 'Whether it changed',
    text: 'Make tampering or later edits visible instead of invisible.',
    image: proofIntegrityImage,
    imageAlt: 'Linked blocks representing a connected record',
  },
] as const;

export function WhyProofSection() {
  return (
    <section
      id="why-proof"
      className="scroll-mt-20 border-b border-grey-02 bg-core-white sm:scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
          Why proof?
        </span>
        <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <h2 className="type-heading max-w-xl text-4xl">
            Your Pi already senses the world. Edge Studio helps it prove what
            happened.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-secondary">
            Weather stations, cameras, robots, energy monitors and home
            automation systems all produce useful data. Edge Studio helps that
            data carry proof with it.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {proofReasons.map(({ title, text, image, imageAlt }) => (
            <article
              className="overflow-hidden rounded-soft border border-grey-02 bg-grey-01"
              key={title}
            >
              <img
                alt={imageAlt}
                className="aspect-[8/5] w-full object-cover"
                src={image}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="mt-3 leading-relaxed text-text-secondary">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
