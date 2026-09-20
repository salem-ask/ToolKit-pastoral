import Image from 'next/image';
import Reveal from './Reveal';
import { images } from '@/config/product';
import ImagePlaceholder from './ImagePlaceholder';
import { imageExists } from '@/lib/images';

export default function SocialProof() {
  return (
    <section className="bg-cream-100 paper-texture">
      <div className="mx-auto max-w-content section-padding py-20 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-forest-900 sm:text-4xl">
              THEY ORDERED. THEY RECEIVED.
            </h2>
            <div className="mx-auto my-8 gold-rule" />
            <p className="text-base leading-relaxed text-ink-900/70">
              Customers have already received their resources after
              purchase.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {images.socialProof.map((src, i) => {
            const exists = imageExists(src);
            return (
              <Reveal key={src} delay={(i % 4) * 90}>
                <div className="relative mx-auto aspect-[750/1622] w-full max-w-[280px] overflow-hidden rounded-lg border border-leather-700/20 bg-forest-900 shadow-card transition-transform duration-300 hover:-translate-y-1">
                  {exists ? (
                    <Image
                      src={src}
                      alt={`WhatsApp exchange confirming order receipt — testimonial ${i + 1}`}
                      fill
                      loading="lazy"
                      sizes="(min-width: 1024px) 280px, 80vw"
                      className="object-cover"
                    />
                  ) : (
                    <ImagePlaceholder
                      label={`WhatsApp screenshot ${i + 1} — to be placed in public/images/social-proof/`}
                    />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
