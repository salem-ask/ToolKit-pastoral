import Reveal from './Reveal';
import { faq } from '@/config/product';

export default function Faq() {
  return (
    <section id="faq" className="bg-cream-50">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="mx-auto my-8 gold-rule" />
          </div>
        </Reveal>

        <div className="mx-auto mt-4 max-w-2xl divide-y divide-leather-700/15">
          {faq.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <details className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg font-semibold text-forest-900 marker:content-none [&::-webkit-details-marker]:hidden">
                  <span>{item.question}</span>
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/50 text-gold-600 transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-base leading-relaxed text-ink-900/75">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
