import Image from 'next/image';
import Reveal from './Reveal';
import { images } from '@/config/product';
import ImagePlaceholder from './ImagePlaceholder';
import { imageExists } from '@/lib/images';

export default function ProductShowcase() {
  const hasMockup = imageExists(images.productMockup);

  return (
    <section className="bg-cream-100 paper-texture">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              YOUR PASTORAL LIBRARY, ALL IN ONE PLACE
            </h2>
            <div className="mx-auto my-8 gold-rule" />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-4 aspect-[12/13] w-full max-w-xl overflow-hidden rounded-md border border-gold-500/25 bg-forest-900 shadow-2xl">
            {hasMockup ? (
              <Image
                src={images.productMockup}
                alt="Overview of The Complete Pastor's Toolkit collection"
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 576px, 90vw"
                className="object-cover"
              />
            ) : (
              <ImagePlaceholder label="Pack overview — to be placed in public/images/product/" />
            )}
          </div>
        </Reveal>

        <Reveal delay={250}>
          <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-leather-700">
            Training + books + reference resources
          </p>
        </Reveal>
      </div>
    </section>
  );
}
