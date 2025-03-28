
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProblemOverview from '@/components/ProblemOverview';
import HowItWorks from '@/components/HowItWorks';
import IndustryFocus from '@/components/IndustryFocus';
import Benefits from '@/components/Benefits';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="w-20 h-20 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <ProblemOverview />
          <HowItWorks />
          <IndustryFocus />
          <Benefits />
          <ContactForm />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Index;
