import Image from 'next/image';
import { product, images } from '@/config/product';
import CheckoutButton from './CheckoutButton';
import ImagePlaceholder from './ImagePlaceholder';
import { imageExists } from '@/lib/images';

export default function Hero() {
  const hasMockup = imageExists(images.productMockup);

  return (
    <section className="relative overflow-hidden bg-forest-950 paper-texture">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(198,156,58,0.12),_transparent_55%)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-leather-700/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-14 section-padding py-20 sm:py-24 lg:grid-cols-2 lg:py-28">
        <div className="animate-fadeUp">
          <h1 className="font-serif text-4xl font-bold leading-[1.08] tracking-tight text-cream-50 sm:text-5xl lg:text-[3.4rem]">
            {product.name}
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-gold-300 sm:text-xl">
            {product.tagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-200/80">
            {product.heroDescription}
          </p>

          <div className="mt-9">
            <CheckoutButton label={product.primaryCtaLabel} source="hero" variant="gold" />
          </div>

          <div className="mt-10 flex items-center gap-4 border-t border-gold-500/20 pt-6">
            <span className="gold-rule" />
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream-200/70">
              {product.heroDomainsLabel}
            </p>
          </div>
        </div>

        <div className="relative animate-fadeIn">
          <div className="absolute -inset-6 -z-10 rounded-lg border border-gold-500/20" />
          <div className="relative mx-auto aspect-[12/13] w-full max-w-md animate-floatSlow overflow-hidden rounded-md border border-gold-500/30 bg-forest-900 shadow-2xl">
            {hasMockup ? (
              <Image
                src={images.productMockup}
                alt="Poster for The Complete Pastor's Toolkit"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 80vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder label="Pack poster / mockup — to be placed in public/images/product/" />
            )}
          </div>
          <div className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-cream-200/50">
            Training + books + reference resources
          </div>
        </div>
      </div>
    </section>
  );
}
