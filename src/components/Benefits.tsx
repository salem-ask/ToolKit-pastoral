import Reveal from './Reveal';
import { benefits } from '@/config/product';

export default function Benefits() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              WHAT YOU&rsquo;LL BE ABLE TO DO
            </h2>
            <div className="mx-auto my-8 gold-rule" />
          </div>
        </Reveal>

        <div className="mx-auto mt-4 grid max-w-3xl grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit} delay={(i % 4) * 70}>
              <div className="flex items-start gap-4 border-b border-leather-700/10 pb-5">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                <p className="text-base leading-relaxed text-ink-900/85">
                  {benefit}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
