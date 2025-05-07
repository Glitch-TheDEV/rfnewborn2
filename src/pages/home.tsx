import { AboutSection } from '@/components/about-section';
import { FactionsSection } from '@/components/factions-section';
import { FeaturesSection } from '@/components/features-section';
import { HeroSection } from '@/components/hero-section';
import { NewsletterSection } from '@/components/newsletter-section';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col min-h-screen">
        <HeroSection />
        <AboutSection />
        <FactionsSection />
        <FeaturesSection />
        <NewsletterSection />
        <SiteFooter />
      </main>
      <Toaster />
    </>
  );
}
