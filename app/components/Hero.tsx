"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Icon from "./ui/Icon";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1] via-[#8b5cf6] to-[#ec4899] animate-gradient-x" />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#f59e0b] via-[#ef4444] to-transparent opacity-70 animate-gradient-y" />
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#6366f1,#8b5cf6,#ec4899,#f59e0b,#6366f1)] opacity-60 animate-spin-slow" />

        <div
          className="absolute inset-0 bg-[#fff]"
          style={{
            clipPath: "polygon(0% 60%, 100% 20%, 100% 100%, 0% 100%)",
          }}
        />

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
              <Button variant="outline" size="md" className="rounded-full">
                Contact sales
                <Icon name="arrowRight" size="sm" className="ml-1 inline" />
              </Button>
            </div>
          </header>

          <div className="grid lg:grid-cols-2 gap-16 items-center py-16 lg:py-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(255,255,255,0.2)] backdrop-blur-sm px-3 py-1 text-sm text-white mb-8 border border-white/20">
                <span className="h-2 w-2 rounded-full bg-white"></span>
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

              <h1
                className="text-[60px] font-bold tracking-[-0.04em] sm:text-[70px] lg:text-[94px] leading-[1.2] mb-8"
                style={{
                  fontFamily: "Basic Commercial Bold, Inter, sans-serif",
                }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a2540] via-[#8B0000] via-[#DC143C] via-[#B22222] to-[#0a2540] animate-text-gradient">
                  Customer insights
                </span>{" "}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#0a2540] via-[#8B0000] via-[#DC143C] via-[#B22222] to-[#0a2540] animate-text-gradient">
                  at the speed of AI
                </span>
              </h1>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl bg-[#fff] border border-gray-200 p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
                      <span className="text-white font-semibold">S</span>
                    </div>
                    <span className="text-gray-900 font-medium">
                      SQUE INSIGHTS
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 rounded bg-gray-100 px-2 py-1 border">
                      <span className="text-xs text-gray-600">🔍 Search</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <h3 className="text-gray-900 font-medium text-sm mb-2">
                      Today
                    </h3>
                    <div className="space-y-2">
                      <div className="text-gray-900 text-lg font-semibold">
                        Customer insights
                      </div>
                      <div className="text-green-600 text-sm font-medium">
                        +32.8%
                      </div>
                      <div className="text-gray-500 text-xs">
                        ↗ +2.4% from last week
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border">
                    <h3 className="text-gray-900 font-medium text-sm mb-2">
                      Research
                    </h3>
                    <div className="space-y-2">
                      <div className="text-gray-900 text-lg font-semibold">
                        $102,633.07
                      </div>
                      <div className="text-green-600 text-sm font-medium">
                        +24.8%
                      </div>
                      <div className="text-gray-500 text-xs">
                        ↗ +$12,453 today
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-2 bg-gray-50 rounded-lg p-4 h-32 border">
                    <div className="h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded"></div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 h-32 border">
                    <div className="h-full bg-gradient-to-t from-pink-500/20 to-orange-500/20 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-600 rounded-full opacity-20"></div>
            </div>
          </div>

          <div className="relative z-10 pt-0 pb-20">
            <div className="max-w-2xl mx-auto lg:mx-0 mb-12">
              <p className="text-xl text-[#3c4043] leading-relaxed mb-8">
                Turn customer conversations into product decisions. Sque
                synthesizes interviews, surveys, and feedback into structured
                insights, themes, and evidence you can act on.
              </p>

              <div className="relative max-w-lg">
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-[#f6f9fb] text-[#3c4043] placeholder:text-gray-400 focus:border-[#0a2540] focus:ring-[#0a2540]/20 shadow-lg pr-32"
                  size="md"
                />
                <Button
                  variant="secondary"
                  size="md"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                >
                  Start now
                  <Icon name="arrowRight" size="sm" className="ml-1 inline" />
                </Button>
              </div>
            </div>

            <div className="text-center mb-16">
              <p className="text-gray-600 font-medium text-sm mb-4">
                Trusted by companies worldwide
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16 items-center justify-items-center opacity-60 py-8">
              <div className="flex justify-center items-center px-4 py-2">
                <Image
                  src="/OpenAI_Logo.svg"
                  alt="OpenAI"
                  width={120}
                  height={24}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>

              <div className="flex justify-center items-center px-4 py-2">
                <Image
                  src="/Amazon_logo.svg"
                  alt="Amazon"
                  width={120}
                  height={24}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>

              <div className="flex justify-center items-center px-4 py-2">
                <Image
                  src="/Google_2015_logo.svg"
                  alt="Google"
                  width={120}
                  height={24}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>
              <div className="flex justify-center items-center px-4 py-2">
                <div className="text-gray-800 font-medium text-xs sm:text-sm text-center">
                  ANTHROPIC
                </div>
              </div>

              <div className="flex justify-center items-center px-4 py-2">
                <div className="text-gray-800 font-medium text-xs sm:text-sm text-center">
                  Marriott
                </div>
              </div>

              <div className="flex justify-center items-center px-4 py-2">
                <Image
                  src="/Shopify_logo_2018.svg"
                  alt="Shopify"
                  width={120}
                  height={24}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>

              <div className="flex justify-center items-center px-4 py-2">
                <Image
                  src="/Airbnb_Logo_Bélo.svg"
                  alt="Airbnb"
                  width={120}
                  height={24}
                  className="h-5 sm:h-6 w-auto"
                />
              </div>
              <div className="flex justify-center items-center px-4 py-2">
                <div className="text-gray-800 font-medium text-xs sm:text-sm text-center">
                  UBER
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
