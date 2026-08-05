import {
  FeatureSection,
  LandingHero,
  Navbar,
  RoadmapTimeline,
  SiteFooter,
} from './components';
import { landingCopy, roadmap } from './constants/landing';

function App() {
  return (
    <div className="min-h-screen bg-grey-01 text-text-primary">
      <Navbar />
      <main id="top">
        <LandingHero />
        <FeatureSection />
        <section
          id="roadmap"
          className="scroll-mt-20 bg-core-white sm:scroll-mt-24"
        >
          <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
            <div className="mb-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-01">
                {landingCopy.roadmapEyebrow}
              </span>
              <h2 className="type-heading mt-4 text-4xl">
                {landingCopy.roadmapTitle}
              </h2>
              <p className="mt-4 text-text-secondary">
                {landingCopy.roadmapText}
              </p>
            </div>
            <RoadmapTimeline items={roadmap} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
