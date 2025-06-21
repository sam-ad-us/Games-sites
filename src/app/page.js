import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to</span>{' '}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 xl:inline">
                    Game Hub
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Discover amazing browser games, challenge your friends, and climb the leaderboards. 
                  From classic arcade games to modern puzzles, we have something for everyone.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/games" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10">
                      Start Playing
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Create Account
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-purple-400 to-pink-600 sm:h-72 md:h-96 lg:w-full lg:h-full opacity-20"></div>
        </div>
      </div>

      {/* Featured Games Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Games</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Games
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Check out our collection of exciting games. More games coming soon!
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Game Card 1 - Coming Soon */}
              <div className="relative group">
                <div className="relative w-full h-64 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎮</div>
                      <h3 className="text-xl font-bold text-white mb-2">Snake Game</h3>
                      <p className="text-gray-200">Classic snake game with modern twist</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Card 2 - Coming Soon */}
              <div className="relative group">
                <div className="relative w-full h-64 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🧩</div>
                      <h3 className="text-xl font-bold text-white mb-2">Puzzle Game</h3>
                      <p className="text-gray-200">Brain-teasing puzzles to solve</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Card 3 - Coming Soon */}
              <div className="relative group">
                <div className="relative w-full h-64 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg overflow-hidden shadow-lg transform transition duration-300 group-hover:scale-105">
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🏆</div>
                      <h3 className="text-xl font-bold text-white mb-2">Racing Game</h3>
                      <p className="text-gray-200">High-speed racing action</p>
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Game Hub?
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Secure Gaming</h3>
                <p className="mt-2 text-base text-gray-500">
                  Your data is safe with us. Play with confidence knowing your information is protected.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Instant Play</h3>
                <p className="mt-2 text-base text-gray-500">
                  No downloads required. All games run directly in your browser for instant fun.
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Multiplayer Ready</h3>
                <p className="mt-2 text-base text-gray-500">
                  Challenge your friends and compete on leaderboards. More multiplayer features coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 