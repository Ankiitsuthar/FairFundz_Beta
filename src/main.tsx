
import { createRoot } from 'react-dom/client';
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.tsx';
import './index.css';

// Try to get the Clerk publishable key from environment variables
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_dummy-key-for-development';

// Create a simpler version of the app when no key is available
const AppWrapper = () => {
  // Check if we're using the dummy key (meaning no real key was provided)
  const isDummyKey = PUBLISHABLE_KEY === 'pk_test_dummy-key-for-development';
  
  if (isDummyKey) {
    console.warn("⚠️ Using dummy Clerk key. Authentication features will not work properly.");
    console.warn("To fix this, you need to provide a VITE_CLERK_PUBLISHABLE_KEY environment variable.");
    console.warn("Visit https://dashboard.clerk.com/ to get your publishable key.");
    
    // Render the app without Clerk integration for development purposes
    return <App />;
  }
  
  // Render the app with Clerk integration when a real key is available
  return (
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      clerkJSVersion="5.56.0-snapshot.v20250312225817"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/"
      signInForceRedirectUrl="/dashboard"
      signUpForceRedirectUrl="/"
      afterSignOutUrl="/"
      waitlistUrl="/">
      <App />
    </ClerkProvider>
  );
};

createRoot(document.getElementById("root")!).render(<AppWrapper />);
