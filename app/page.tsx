import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { MembershipPlans } from '@/components/sections/membership-plans';
import { Trainers } from '@/components/sections/trainers';
import { Testimonials } from '@/components/sections/testimonials';
import { CTA } from '@/components/sections/cta';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <MembershipPlans />
        <Trainers />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}