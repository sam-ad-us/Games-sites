'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };

  return (
    <nav className="bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="text-white text-2xl font-bold">
                🎮 Game Hub
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link href="/games" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              Games
            </Link>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="text-white text-sm">
                  Welcome, {user.username}!
                </div>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link href="/login" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium">
                  Login
                </Link>
                <Link href="/signup" className="bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition duration-200">
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/games" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                Games
              </Link>
              
              {user ? (
                <div className="space-y-2">
                  <div className="text-white px-3 py-2 text-sm">
                    Welcome, {user.username}!
                  </div>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-md text-sm font-medium w-full text-left transition duration-200"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link href="/login" className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium">
                    Login
                  </Link>
                  <Link href="/signup" className="bg-white text-purple-600 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium block transition duration-200">
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 