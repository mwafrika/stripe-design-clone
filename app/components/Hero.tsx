"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.3),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <header className="flex items-center justify-between py-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-semibold text-white">sque</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <button className="text-sm text-white/80 hover:text-white group relative">
              Products
              <svg
                className="ml-1 h-4 w-4 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="text-sm text-white/80 hover:text-white group relative">
              Solutions
              <svg
                className="ml-1 h-4 w-4 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="text-sm text-white/80 hover:text-white group relative">
              Developers
              <svg
                className="ml-1 h-4 w-4 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <button className="text-sm text-white/80 hover:text-white group relative">
              Resources
              <svg
                className="ml-1 h-4 w-4 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <Link
              href="/pricing"
              className="text-sm text-white/80 hover:text-white"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="text-sm text-white/80 hover:text-white">
              Sign in
              <svg
                className="ml-1 h-4 w-4 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-colors">
              Contact sales
              <svg
                className="ml-1 h-4 w-4 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-20">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 text-sm text-white mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
              Research 2024 • Watch on demand
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Customer insights{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600">
                at the speed of AI
              </span>
            </h1>

            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              Turn customer conversations into product decisions. Sque
              synthesizes interviews, surveys, and feedback into structured
              insights, themes, and evidence you can act on.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 rounded-full border-0 bg-white/10 backdrop-blur-sm px-4 py-3 text-white placeholder:text-white/60 focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
              <button className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition-colors">
                Start now
                <svg
                  className="ml-2 h-4 w-4 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <span className="text-white font-semibold">S</span>
                  </div>
                  <span className="text-white font-medium">SQUE INSIGHTS</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-32 rounded bg-white/20 px-2 py-1">
                    <span className="text-xs text-white/80">🔍 Search</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-medium text-sm mb-2">Today</h3>
                  <div className="space-y-2">
                    <div className="text-white text-lg font-semibold">
                      Customer insights
                    </div>
                    <div className="text-white/60 text-sm">+32.8%</div>
                    <div className="text-white/60 text-xs">
                      ↗ +2.4% from last week
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="text-white font-medium text-sm mb-2">
                    Research
                  </h3>
                  <div className="space-y-2">
                    <div className="text-white text-lg font-semibold">
                      $102,633.07
                    </div>
                    <div className="text-white/60 text-sm">+24.8%</div>
                    <div className="text-white/60 text-xs">
                      ↗ +$12,453 today
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white/5 rounded-lg p-4 h-32">
                  <div className="h-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded"></div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 h-32">
                  <div className="h-full bg-gradient-to-t from-pink-500/20 to-orange-500/20 rounded"></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-20"></div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {[
              "OpenAI",
              "amazon",
              "Google",
              "ANTHROPIC",
              "Marriott",
              "shopify",
              "airbnb",
              "UBER",
            ].map((company) => (
              <div
                key={company}
                className="text-white/60 font-medium text-sm text-center"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
