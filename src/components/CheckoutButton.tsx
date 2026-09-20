'use client';

import { CHARIOW_CHECKOUT_URL } from '@/config/product';
import { trackCheckoutClick } from '@/lib/analytics';

type Variant = 'gold' | 'cream' | 'outline';

const variantClasses: Record<Variant, string> = {
  gold:
    'bg-gradient-to-b from-gold-400 to-gold-600 text-ink-900 shadow-[0_10px_25px_-8px_rgba(198,156,58,0.6)] hover:from-gold-300 hover:to-gold-500',
  cream:
    'bg-cream-50 text-forest-900 shadow-card hover:bg-cream-100',
  outline:
    'border border-gold-500/70 text-gold-400 hover:bg-gold-500/10',
};

export default function CheckoutButton({
  label,
  source,
  variant = 'gold',
  className = '',
}: {
  label: string;
  source: string;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a
      href={CHARIOW_CHECKOUT_URL}
      onClick={() => trackCheckoutClick(source)}
      data-event="checkout_click"
      data-source={source}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 ${variantClasses[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
