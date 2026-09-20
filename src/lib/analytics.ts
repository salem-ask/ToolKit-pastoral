/**
 * Lightweight tracking for checkout button clicks.
 * Compatible with a future Meta Pixel / Meta Conversion API integration:
 * if `window.fbq` is present, the event is also forwarded to it.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackCheckoutClick(source: string) {
  if (typeof window === 'undefined') return;

  const detail = { source, url: window.location.href, timestamp: Date.now() };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'checkout_click', ...detail });

  if (typeof window.fbq === 'function') {
    window.fbq('track', 'InitiateCheckout', { content_name: source });
  }

  window.dispatchEvent(new CustomEvent('checkout_click', { detail }));
}
