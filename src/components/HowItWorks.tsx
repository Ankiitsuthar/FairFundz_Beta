
import React, { useEffect, useRef } from 'react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const childrenElements = sectionRef.current?.querySelectorAll('.fade-element');
    childrenElements?.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      childrenElements?.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Direct Salary Deposits',
      description: 'Companies deposit worker salaries directly to our secure platform, eliminating middlemen.'
    },
    {
      number: '02',
      title: '100% Wage Transfers',
      description: 'Workers receive their FULL salary with zero deductions, protecting their hard-earned money.'
    },
    {
      number: '03',
      title: 'Transparent Digital Records',
      description: 'All transactions are recorded digitally, providing complete transparency and accountability.'
    },
    {
      number: '04',
      title: 'Real-time Notifications',
      description: 'Workers get instant alerts when payments are processed, giving peace of mind.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-element opacity-0 transition-opacity duration-1000">
          <h2 className="section-title">How FairFundz Works</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures workers receive 100% of their wages with complete transparency.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="glass-card p-6 fade-element opacity-0 transition-opacity duration-1000"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 inline-block max-w-2xl fade-element opacity-0 transition-opacity duration-1000" style={{transitionDelay: '800ms'}}>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                $
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold mb-1">Secure & Compliant</h3>
                <p className="text-gray-600">All transactions are protected with bank-level security and comply with local regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
