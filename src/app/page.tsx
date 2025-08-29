import HeroSection from '@/components/ui/hero-section';
import AudienceSegmentation from '@/components/ui/audience-segmentation';
import CaseStudies from '@/components/ui/case-studies';
import Methodology from '@/components/ui/methodology';
import CostCalculator from '@/components/ui/cost-calculator';
import SocialProof from '@/components/ui/social-proof';
import ServicesSection from '@/components/ui/services-section';
import LeadMagnet from '@/components/ui/lead-magnet';
import TeamSection from '@/components/ui/team-section';
import FaqSection from '@/components/ui/faq-section';
import FinalCta from '@/components/ui/final-cta';
import FloatingCTA from '@/components/ui/floating-cta';
import ExitIntentModal from '@/components/ui/exit-intent-modal';
import StructuredData from '@/components/structured-data';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AudienceSegmentation />
      <CaseStudies />
      <Methodology />
      <CostCalculator />
      <SocialProof />
      <ServicesSection />
      <LeadMagnet />
      <TeamSection />
      <FaqSection />
      <FinalCta />

      {/* Floating Elements */}
      <FloatingCTA />
      <ExitIntentModal />
      <StructuredData />
    </main>
  );
}
