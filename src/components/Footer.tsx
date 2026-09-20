import { product, contact } from '@/config/product';

export default function Footer() {
  return (
    <footer className="bg-ink-900 pb-28 pt-16 sm:pb-16">
      <div className="mx-auto max-w-content section-padding">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="font-serif text-lg font-bold tracking-wide text-cream-50">
              {product.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-cream-200/60">
              Practical training &amp; essential resources for ministry.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-cream-200/70 transition-colors hover:text-gold-400"
            >
              {contact.email}
            </a>
            <a
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-gold-500/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-400 transition-colors hover:bg-gold-500/10"
            >
              Contact on WhatsApp
            </a>
            <a
              href={`https://${contact.website}`}
              className="text-sm text-cream-200/50 transition-colors hover:text-gold-400"
            >
              {contact.website}
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream-200/10 pt-6 text-center text-xs text-cream-200/40 sm:text-left">
          <p>
            © {new Date().getFullYear()} {product.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
