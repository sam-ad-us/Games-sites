'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Guest() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGuestLogin = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('/api/auth/guest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok) {
        // Save token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        // Redirect to home page
        router.push('/');
      } else {
        alert('Failed to create guest account. Please try again.');
      }
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Play as Guest
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Start playing games immediately without creating an account
          </p>
        </div>
        
        <div className="mt-8 space-y-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Guest Mode Limitations
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Your game progress won't be saved</li>
                    <li>You won't be able to access leaderboards</li>
                    <li>Your account will be temporary</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating guest account...' : 'Start Playing as Guest'}
            </button>
          </div>

          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600">
              Want to save your progress?
            </p>
            <div className="space-x-4">
              <Link href="/signup" className="text-sm text-purple-600 hover:text-purple-500 font-medium">
                Create Account
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/login" className="text-sm text-purple-600 hover:text-purple-500 font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 