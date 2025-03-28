
import React from 'react';
import { SignUp as ClerkSignUp } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

// Check if we're using the dummy key
const isDummyKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY === undefined || 
                   import.meta.env.VITE_CLERK_PUBLISHABLE_KEY === 'pk_test_dummy-key-for-development';

const SignUp = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-md mx-auto glass-card p-8">
          <h1 className="text-2xl font-bold text-center mb-6">Create a FairFundz Account</h1>
          <div className="mb-4 text-center text-gray-600">
            Join the platform ensuring 100% fair wages for every worker
          </div>
          
          {isDummyKey ? (
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100 mb-6">
                <p className="text-sm text-yellow-700">
                  Authentication is currently in development mode. To enable full authentication features, please provide a valid Clerk publishable key.
                </p>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email" 
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input 
                    type="password" 
                    id="password" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Create a password" 
                  />
                </div>
                <Button className="w-full" type="button">
                  Create Account
                </Button>
                <div className="text-center text-sm text-gray-600">
                  Already have an account? <Link to="/sign-in" className="text-blue-500 hover:text-blue-700">Sign in</Link>
                </div>
              </form>
            </div>
          ) : (
            <ClerkSignUp 
              appearance={{
                elements: {
                  formButtonPrimary: 'btn-primary py-2',
                  card: 'shadow-none',
                  footer: 'text-center',
                  footerAction: 'font-medium text-blue-500 hover:text-blue-700'
                }
              }}
              routing="path"
              path="/sign-up"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
