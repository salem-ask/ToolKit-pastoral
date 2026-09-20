import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import { seo, images, SITE_URL } from '@/config/product';
import { imageExists } from '@/lib/images';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['600', '700', '800'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const hasOgImage = imageExists(images.productMockup);
const ogImages = hasOgImage
  ? [{ url: images.productMockup, width: 1000, height: 1083, alt: seo.title }]
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: SITE_URL,
    siteName: seo.title,
    locale: 'en_US',
    type: 'website',
    images: ogImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: hasOgImage ? [images.productMockup] : undefined,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#102015',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js-anim');",
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
