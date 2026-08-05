import { landingCopy } from '../../constants/landing';

const partners = ['Minima', 'Integritas'] as const;

export function PoweredBySection() {
  return (
    <section
      aria-labelledby="powered-by-title"
      className="border-b border-grey-02 bg-grey-01"
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

        <div className="grid sm:grid-cols-2">
          {partners.map((partner) => (
            <div
              className="flex min-h-44 items-center justify-center p-6"
              key={partner}
            >
              {/* Replace this placeholder with the final partner logo image. */}
              <div
                aria-label={`${partner} logo placeholder`}
                className="flex h-24 w-full max-w-64 flex-col items-center justify-center rounded-soft border border-dashed border-grey-04 bg-core-white px-6 text-center"
                role="img"
              >
                <span className="type-title">{partner}</span>
                <span className="type-mono mt-2 uppercase text-text-secondary">
                  logo placeholder
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
