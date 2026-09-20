import Reveal from './Reveal';

const pillars = [
  'LEARN',
  'ORGANIZE',
  'TRAIN',
  'TEACH',
  'LEAD',
  'GROW',
];

export default function Solution() {
  return (
    <section className="bg-forest-900">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
              INTRODUCING THE COMPLETE PASTOR&rsquo;S TOOLKIT
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-lg leading-relaxed text-cream-200/80">
              We&rsquo;ve brought together, in a single collection, practical
              training and documentary resources that give pastors useful
              tools for the different stages and responsibilities of their
              ministry.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {pillars.map((word, i) => (
              <div key={word} className="text-center">
                <p className="font-serif text-2xl font-semibold tracking-wide text-gold-400 sm:text-3xl">
                  {word}
                </p>
                {i < pillars.length && (
                  <span className="mx-auto mt-3 block h-px w-10 bg-gold-500/40" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
