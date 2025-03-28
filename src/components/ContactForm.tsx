
import React, { useState, useEffect, useRef } from 'react';
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('worker');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [workerForm, setWorkerForm] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    message: ''
  });
  
  const [businessForm, setBusinessForm] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    employees: '',
    message: ''
  });
  
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

  const handleWorkerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you! We'll be in touch soon.",
    });
    setWorkerForm({
      name: '',
      email: '',
      phone: '',
      industry: '',
      message: ''
    });
  };

  const handleBusinessSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "Thank you for your interest! Our team will contact you shortly.",
    });
    setBusinessForm({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      employees: '',
      message: ''
    });
  };

  const handleWorkerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setWorkerForm({
      ...workerForm,
      [e.target.name]: e.target.value
    });
  };

  const handleBusinessChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBusinessForm({
      ...businessForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gray-50 opacity-0 transition-opacity duration-1000" 
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Get Started with FairFundz</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join thousands of workers and businesses already benefiting from fair wage solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto glass-card p-8">
          <div className="flex mb-8">
            <button
              className={`flex-1 py-3 font-medium transition-colors ${
                activeTab === 'worker' 
                  ? 'bg-blue-500 text-white rounded-l-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-l-lg'
              }`}
              onClick={() => setActiveTab('worker')}
            >
              I'm a Worker
            </button>
            <button
              className={`flex-1 py-3 font-medium transition-colors ${
                activeTab === 'business' 
                  ? 'bg-blue-500 text-white rounded-r-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-r-lg'
              }`}
              onClick={() => setActiveTab('business')}
            >
              I'm a Business
            </button>
          </div>
          
          {activeTab === 'worker' ? (
            <form onSubmit={handleWorkerSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={workerForm.name}
                    onChange={handleWorkerChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={workerForm.email}
                    onChange={handleWorkerChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={workerForm.phone}
                    onChange={handleWorkerChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="industry" className="block text-gray-700 mb-2">Industry</label>
                  <select
                    id="industry"
                    name="industry"
                    value={workerForm.industry}
                    onChange={handleWorkerChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  >
                    <option value="">Select your industry</option>
                    <option value="construction">Construction</option>
                    <option value="security">Security Services</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="logistics">Logistics & Delivery</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={workerForm.message}
                  onChange={handleWorkerChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Get Started</button>
            </form>
          ) : (
            <form onSubmit={handleBusinessSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="companyName" className="block text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={businessForm.companyName}
                    onChange={handleBusinessChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="contactName" className="block text-gray-700 mb-2">Contact Person</label>
                  <input
                    type="text"
                    id="contactName"
                    name="contactName"
                    value={businessForm.contactName}
                    onChange={handleBusinessChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={businessForm.email}
                    onChange={handleBusinessChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={businessForm.phone}
                    onChange={handleBusinessChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="employees" className="block text-gray-700 mb-2">Number of Employees</label>
                <select
                  id="employees"
                  name="employees"
                  value={businessForm.employees}
                  onChange={handleBusinessChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                  required
                >
                  <option value="">Select employee count</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={businessForm.message}
                  onChange={handleBusinessChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 h-32"
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">Request Demo</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
