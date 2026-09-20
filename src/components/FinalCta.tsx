import Reveal from './Reveal';
import { product } from '@/config/product';
import CheckoutButton from './CheckoutButton';

export default function FinalCta() {
  return (
    <section className="bg-forest-900 paper-texture">
      <div className="mx-auto max-w-content section-padding py-20 text-center sm:py-24">
        <Reveal>
          <h2 className="font-serif text-3xl font-bold leading-tight text-cream-50 sm:text-4xl">
            YOUR MINISTRY DESERVES GOOD TOOLS.
          </h2>
          <div className="mx-auto my-8 gold-rule" />
          <p className="mx-auto max-w-xl text-lg leading-relaxed text-cream-200/80">
            Stop searching for your pastoral resources in multiple places.
            Discover The Complete Pastor&rsquo;s Toolkit and get a collection
            organized around ministry&rsquo;s major responsibilities.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10">
            <CheckoutButton
              label={product.finalCtaLabel}
              source="final_cta"
              variant="gold"
              className="px-10 py-5 text-base"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
