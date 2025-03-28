
import React, { useEffect, useRef, useState } from 'react';

const IndustryFocus = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndustry, setActiveIndustry] = useState(0);
  
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
    
    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }
    
    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const industries = [
    {
      name: 'Construction',
      workers: '60M workers',
      description: 'Supporting construction workers with transparent wage payments, eliminating contractor cuts.',
      color: 'bg-yellow-500'
    },
    {
      name: 'Security Services',
      workers: '8M workers',
      description: 'Ensuring security personnel receive their full pay without middleman deductions.',
      color: 'bg-blue-500'
    },
    {
      name: 'Hospitality',
      workers: '10M workers',
      description: 'Helping housekeeping and hospitality staff get fair compensation for their hard work.',
      color: 'bg-green-500'
    },
    {
      name: 'Logistics & Delivery',
      workers: '7M gig workers',
      description: 'Supporting delivery personnel with transparent earnings and immediate payments.',
      color: 'bg-purple-500'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [industries.length]);

  return (
    <section 
      id="industry-focus" 
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Industry Focus</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We're helping workers across multiple industries receive fair and transparent wages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-8 h-[400px] relative overflow-hidden">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`absolute inset-0 p-8 transition-all duration-500 flex flex-col justify-center ${
                  activeIndustry === index 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className={`w-16 h-16 ${industry.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6`}>
                  {industry.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
                <div className="text-blue-500 font-semibold mb-4">{industry.workers}</div>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeIndustry === index 
                    ? 'bg-blue-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
                onClick={() => setActiveIndustry(index)}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 ${
                  activeIndustry === index 
                    ? 'bg-white text-blue-500' 
                    : `${industry.color} text-white`
                }`}>
                  {industry.name.charAt(0)}
                </div>
                <h4 className="font-bold mb-1">{industry.name}</h4>
                <div className={activeIndustry === index ? 'text-white/80' : 'text-blue-500'}>
                  {industry.workers}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryFocus;
