
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen pt-20 md:pt-0 flex items-center relative overflow-hidden" 
      ref={heroRef}
    >
      {/* Background Circle Effects */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6 opacity-0 transition-opacity duration-1000">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium text-sm mb-2 animate-fade-in">
              Fair Wages for All
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Ensuring Fair Wages for Every Worker!
            </h1>
            
            <p className="text-lg text-gray-600 mt-4 max-w-lg animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              We're on a mission to eliminate unfair wage deductions and bring transparency to salary payments across industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a href="#contact" className="btn-primary flex items-center justify-center">
                Get Fair Wages
              </a>
              <a href="#contact" className="btn-secondary flex items-center justify-center">
                Join as a Business
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 opacity-0 transition-opacity duration-1000">
            <div className="relative w-full h-full flex justify-center animate-float">
              <div className="w-full max-w-lg h-auto">
                <div className="glass-card p-8 rounded-2xl relative">
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg font-bold">
                    100%
                  </div>
                  <div className="space-y-4">
                    <div className="h-16 bg-blue-50 rounded-lg flex items-center p-4 border border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                        $
                      </div>
                      <div>
                        <div className="h-4 w-36 bg-blue-200 rounded"></div>
                        <div className="h-3 w-24 bg-blue-100 rounded mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="h-16 bg-blue-50 rounded-lg flex items-center p-4 border border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                        $
                      </div>
                      <div>
                        <div className="h-4 w-48 bg-blue-200 rounded"></div>
                        <div className="h-3 w-32 bg-blue-100 rounded mt-2"></div>
                      </div>
                    </div>
                    
                    <div className="h-16 bg-blue-50 rounded-lg flex items-center p-4 border border-blue-100">
                      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-4">
                        $
                      </div>
                      <div>
                        <div className="h-4 w-40 bg-blue-200 rounded"></div>
                        <div className="h-3 w-28 bg-blue-100 rounded mt-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
