import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import Categories from '@/components/Categories';
import ForWhom from '@/components/ForWhom';
import Journey from '@/components/Journey';
import ProductShowcase from '@/components/ProductShowcase';
import Benefits from '@/components/Benefits';
import SocialProof from '@/components/SocialProof';
import Offer from '@/components/Offer';
import Faq from '@/components/Faq';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import StickyMobileCta from '@/components/StickyMobileCta';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Categories />
      <ForWhom />
      <Journey />
      <ProductShowcase />
      <Benefits />
      <SocialProof />
      <Offer />
      <Faq />
      <FinalCta />
      <Footer />
      <StickyMobileCta />
    </main>
  );
}
