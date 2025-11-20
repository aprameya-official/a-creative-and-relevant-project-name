import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import TrustedBySection from '../components/sections/TrustedBySection';
import FeaturesSection from '../components/sections/FeaturesSection';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import OpenSourceCallout from '../components/sections/OpenSourceCallout';
import CorePrinciplesSection from '../components/sections/CorePrinciplesSection';
import ZeroConfigFeaturesSection from '../components/sections/ZeroConfigFeaturesSection';
import CallToActionBlock from '../components/sections/CallToActionBlock';
import PricingSection from '../components/sections/PricingSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import UseCasesSection from '../components/sections/UseCasesSection';
import FAQSection from '../components/sections/FAQSection';

const HomePage: React.FC = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <IntegrationsSection />
      <OpenSourceCallout />
      <CorePrinciplesSection />
      <ZeroConfigFeaturesSection />
      <CallToActionBlock />
      <PricingSection />
      <TestimonialsSection />
      <UseCasesSection />
      <FAQSection />
    </main>
  );
};

export default HomePage;
