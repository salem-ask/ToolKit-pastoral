import Reveal from './Reveal';
import { product } from '@/config/product';
import CheckoutButton from './CheckoutButton';

export default function Offer() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-forest-950 via-leather-950 to-forest-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(198,156,58,0.1),_transparent_60%)]" />
      <div className="relative mx-auto max-w-content section-padding py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
            {product.name}
          </h2>
          <div className="mx-auto my-8 gold-rule" />
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-cream-200/80">
            A collection designed to put a wide range of pastoral resources
            within reach, all in one place.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10">
            <CheckoutButton
              label={product.offerCtaLabel}
              source="offer"
              variant="gold"
              className="px-10 py-5 text-base"
            />
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-cream-200/60">
              {product.accessNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
