import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CompanyOverview from '../components/home/CompanyOverview';
import WhyKLLatifix from '../components/home/WhyKLLatifix';
import ProductHighlights from '../components/home/ProductHighlights';
import SustainabilityPromise from '../components/home/SustainabilityPromise';
import CTASection from '../components/home/CTASection';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CompanyOverview />
      <WhyKLLatifix />
      <ProductHighlights />
      <SustainabilityPromise />
      <CTASection />
    </div>
  );
};

export default Home;