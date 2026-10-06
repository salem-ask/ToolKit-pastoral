import Reveal from './Reveal';
import { whatsappCommunity } from '@/config/product';

export default function WhatsappCommunity() {
  return (
    <section className="bg-leather-900 paper-texture">
      <div className="mx-auto max-w-content section-padding py-16 text-center sm:py-20">
        <Reveal>
          <h2 className="font-serif text-2xl font-bold leading-tight text-cream-50 sm:text-3xl">
            {whatsappCommunity.title}
          </h2>
          <div className="mx-auto my-6 gold-rule" />
          <p className="mx-auto max-w-xl text-base leading-relaxed text-cream-100">
            {whatsappCommunity.description}
          </p>

          <div className="mt-8">
            <a
              href={whatsappCommunity.groupLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-to-b from-gold-400 to-gold-600 px-8 py-4 text-sm font-semibold tracking-wide text-ink-900 shadow-[0_10px_25px_-8px_rgba(198,156,58,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:from-gold-300 hover:to-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400"
            >
              {whatsappCommunity.ctaLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
