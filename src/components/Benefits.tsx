
import React, { useEffect, useRef } from 'react';

const Benefits = () => {
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

  const benefits = [
    {
      icon: '✓',
      title: 'No Wage Cuts',
      description: 'Workers receive 100% of their earnings without any middleman deductions.'
    },
    {
      icon: '🔎',
      title: 'Transparent Payments',
      description: 'Clear visibility into payment calculations, schedules and history.'
    },
    {
      icon: '🔒',
      title: 'Secure Salary Deposits',
      description: 'Bank-level security ensures your money is protected at all times.'
    },
    {
      icon: '⚖️',
      title: 'Legal & Ethical Compliance',
      description: 'All transactions comply with labor laws and ethical payment practices.'
    }
  ];

  const testimonials = [
    {
      quote: "FairFundz changed my life. I now receive my full salary without any mysterious deductions.",
      author: "Varshal H.",
      role: "Construction Worker"
    },
    {
      quote: "As a business owner, I can ensure my workers get paid fairly and transparently. It's improved morale significantly.",
      author: "Ankit S.",
      role: "Security Agency Owner"
    },
    {
      quote: "The transparency and reliability of FairFundz has eliminated payment disputes and improved trust.",
      author: "Dhruv T.",
      role: "Hospitality Manager"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-element opacity-0 transition-opacity duration-1000">
          <h2 className="section-title">Why Choose FairFundz?</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our platform offers unique benefits to both workers and businesses.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-6 fade-element opacity-0 transition-opacity duration-1000"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="fade-element opacity-0 transition-opacity duration-1000" style={{transitionDelay: '800ms'}}>
          <h3 className="section-subtitle text-center mb-8">What Our Users Say</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-xl relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded-full text-xl">
                  "
                </div>
                <p className="text-gray-700 mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-300 rounded-full mr-3"></div>
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
