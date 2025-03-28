
import React, { useState, useEffect } from 'react';
import { Menu, X, User, LogIn } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

// Check if we're using the dummy key
const isDummyKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY === undefined || 
                   import.meta.env.VITE_CLERK_PUBLISHABLE_KEY === 'pk_test_dummy-key-for-development';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#how-it-works' },
    { name: 'Industry Focus', href: '#industry-focus' },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Authentication UI for desktop - handles both with and without Clerk
  const DesktopAuthUI = () => {
    if (isDummyKey) {
      return (
        <div className="flex items-center space-x-4 ml-4">
          <Link to="/sign-in" className="text-gray-700 hover:text-blue-500 font-medium flex items-center">
            <LogIn className="h-4 w-4 mr-1" />
            Sign In
          </Link>
          <Link to="/sign-up" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
            <User className="h-4 w-4 mr-1" />
            Sign Up
          </Link>
        </div>
      );
    }
    
    return (
      <>
        <SignedIn>
          <div className="flex items-center ml-4">
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        
        <SignedOut>
          <div className="flex items-center space-x-4 ml-4">
            <Link to="/sign-in" className="text-gray-700 hover:text-blue-500 font-medium flex items-center">
              <LogIn className="h-4 w-4 mr-1" />
              Sign In
            </Link>
            <Link to="/sign-up" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
              <User className="h-4 w-4 mr-1" />
              Sign Up
            </Link>
          </div>
        </SignedOut>
      </>
    );
  };

  // Authentication UI for mobile - handles both with and without Clerk
  const MobileAuthUI = () => {
    if (isDummyKey) {
      return (
        <div className="flex flex-col pt-2 border-t border-gray-100">
          <Link 
            to="/sign-in"
            className="flex items-center text-gray-700 hover:text-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Link>
          <Link 
            to="/sign-up"
            className="flex items-center text-gray-700 hover:text-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Link>
        </div>
      );
    }
    
    return (
      <SignedOut>
        <div className="flex flex-col pt-2 border-t border-gray-100">
          <Link 
            to="/sign-in"
            className="flex items-center text-gray-700 hover:text-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Link>
          <Link 
            to="/sign-up"
            className="flex items-center text-gray-700 hover:text-blue-500 font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <User className="h-4 w-4 mr-2" />
            Sign Up
          </Link>
        </div>
      </SignedOut>
    );
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-blue-500 font-bold text-2xl">FairFundz</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <DesktopAuthUI />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          {!isDummyKey && (
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          )}
          <button
            className="ml-4 text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-fade-in-down">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 font-medium py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <MobileAuthUI />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
