import Reveal from './Reveal';
import { categories } from '@/config/product';

export default function Categories() {
  return (
    <section id="areas" className="bg-cream-100 paper-texture">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              10 AREAS TO SUPPORT YOUR MINISTRY
            </h2>
            <div className="mx-auto my-8 gold-rule" />
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.number} delay={(i % 4) * 80}>
              <article className="group h-full rounded-sm border border-leather-700/15 bg-cream-50 p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-[0_18px_35px_-15px_rgba(115,74,38,0.4)]">
                <div className="flex items-start gap-5">
                  <span className="font-serif text-3xl font-bold text-gold-500/70 transition-colors group-hover:text-gold-600">
                    {cat.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-bold leading-snug text-forest-900">
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-900/70">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
