import CtaBanner from "@/components/CtaBanner";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Layout } from "@/components/Layout";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TrustSection />
      <CtaBanner />
    </Layout>
  );
}
