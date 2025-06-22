import { Hero } from '@/src/components/sections/hero';
import { Features } from '@/src/components/sections/features';
import { MembershipPlans } from '@/src/components/sections/membership-plans';
import { Trainers } from '@/src/components/sections/trainers';
import { Testimonials } from '@/src/components/sections/testimonials';
import { CTA } from '@/src/components/sections/cta';
import { Header } from '@/src/components/layout/header';
import { Footer } from '@/src/components/layout/footer';

export default function Home() {
  return (
    <div className="min-h-screen ">
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