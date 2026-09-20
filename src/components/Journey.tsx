import Reveal from './Reveal';
import { journeySteps } from '@/config/product';

export default function Journey() {
  return (
    <section className="bg-forest-950">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
              ONE TOOLKIT. COUNTLESS RESOURCES.
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-base leading-relaxed text-cream-200/75">
              Whether you&rsquo;re just starting out in ministry, in the
              middle of planting a church, or already leading an assembly,
              The Complete Pastor&rsquo;s Toolkit lets you find, in one place,
              resources for a wide range of pastoral responsibilities.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-y-6">
            {journeySteps.map((step, i) => (
              <div key={step} className="flex items-center">
                <span className="rounded-sm border border-gold-500/30 bg-forest-900/60 px-4 py-2.5 text-xs font-semibold tracking-[0.15em] text-gold-400 sm:text-sm">
                  {step}
                </span>
                {i < journeySteps.length - 1 && (
                  <span className="mx-2 h-px w-6 bg-gold-500/30 sm:w-8" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
