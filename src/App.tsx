import React, { useEffect } from 'react';
import Header from './components/Header';
import Banner from './sections/Banner';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import StatisticsSection from './sections/StatisticsSection';
import UseCasesSection from './sections/UseCasesSection';
import ImplementationSection from './sections/ImplementationSection';
import FAQSection from './sections/FAQSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    document.title = "Support360 — Техническая поддержка в формате мессенджера";
  }, []);

  return (
    <div className="font-sans">
      <Header />
      <Banner />
      <FeaturesSection />
      <StatisticsSection />
      <HowItWorksSection />
      <UseCasesSection />
      <ImplementationSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;