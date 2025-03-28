
import React, { useEffect, useRef } from 'react';

const ProblemOverview = () => {
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

  const problems = [
    {
      icon: '💸',
      title: 'Unfair Wage Deductions',
      description: 'Workers lose 10-30% of their hard-earned wages to contractor middlemen, creating financial hardship.',
      stat: '10-30%',
      statLabel: 'cuts by contractors'
    },
    {
      icon: '🔍',
      title: 'Lack of Transparency',
      description: 'Workers often have no visibility into salary calculations, deductions, or payment schedules.',
      stat: '60%',
      statLabel: 'lack payment transparency'
    },
    {
      icon: '📉',
      title: 'Financial Instability',
      description: 'Unpredictable wage cuts and delayed payments create serious financial planning challenges.',
      stat: '45%',
      statLabel: 'face financial insecurity'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16 fade-element opacity-0 transition-opacity duration-1000">
          <h2 className="section-title">The Problem We're Solving</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Millions of workers face significant challenges when it comes to fair and transparent wage payments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="glass-card p-8 fade-element opacity-0 transition-opacity duration-1000"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{problem.title}</h3>
              <p className="text-gray-600 mb-6">{problem.description}</p>
              <div className="bg-blue-50 p-4 rounded-lg flex items-center justify-between">
                <span className="text-3xl font-bold text-blue-600">{problem.stat}</span>
                <span className="text-sm text-gray-500 max-w-[120px] text-right">{problem.statLabel}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemOverview;
