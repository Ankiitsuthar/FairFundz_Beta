
import React from 'react';
import { UserButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

const Dashboard = () => {
  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-blue-500 font-bold text-2xl">FairFundz</Link>
          </div>
          <div className="flex items-center space-x-4">
            <UserButton />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Welcome, {user?.firstName || 'User'}!</h1>
            <Link to="/">
              <Button variant="outline">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Your Fair Wages Dashboard</h2>
            <p className="text-gray-600 mb-4">
              This is where you'll be able to track your wages, payment history, and ensure 
              you're receiving 100% of what you've earned.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <p className="text-sm text-blue-700">
                Your dashboard is currently being set up. Soon you'll have access to all your payment details.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Recent Payments</h3>
              <p className="text-gray-600 text-sm">No payment data available yet.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Account Settings</h3>
              <p className="text-gray-600 text-sm">
                Manage your profile, payment methods, and notification preferences.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
