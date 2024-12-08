import React, { useState } from 'react';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LogInForm';

const App = () => {
  const [isSignUp, setIsSignUp] = useState<boolean>(true);

  const toggleForm = () => setIsSignUp(!isSignUp);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6 ">
          {isSignUp ? 'Sign Up' : 'Login'}
        </h1>
        {isSignUp ? <SignUpForm /> : <LoginForm />}
        <button
          onClick={toggleForm}
          className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSignUp
            ? 'Already have an account? Login'
            : 'Don’t have an account? Sign Up'}
        </button>
      </div>
    </div>
  );
};

export default App;
