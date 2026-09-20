import { product } from '@/config/product';
import CheckoutButton from './CheckoutButton';

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-500/30 bg-forest-950/95 p-3 backdrop-blur sm:hidden">
      <CheckoutButton
        label={product.stickyCtaLabel}
        source="sticky_mobile"
        variant="gold"
        className="w-full py-3.5 text-sm"
      />
    </div>
  );
}
