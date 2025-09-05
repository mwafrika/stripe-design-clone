"use client";

export default function Features() {
  return (
    <>
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-100 text-blue-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-blue-600">
                      Synthesis
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Turn customer conversations into product decisions
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Sque synthesizes interviews, surveys, and feedback into
                    structured insights, themes, and evidence you can act on.
                    Transform qualitative data into quantitative insights.
                  </p>
                  <button className="bg-[#635bff] hover:bg-[#081d32] px-4 py-2 text-white rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm cursor-pointer">
                    Start with Sque
                    <svg
                      className="ml-1 h-3 w-3 inline"
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

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Customer interviews analysis
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Survey data synthesis
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Feedback theme extraction
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500">
                      Synthesis Dashboard
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Processing Interviews
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        47 customer interviews analyzed
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Insights Generated
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        23 actionable insights ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-green-100 text-green-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-green-600">
                      Roadmaps
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Build evidence-based product roadmaps
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Create data-driven product decisions backed by real customer
                    evidence. Sque helps you prioritize features based on actual
                    user needs and feedback patterns.
                  </p>

                  <button className="bg-[#635bff] hover:bg-[#081d32] px-4 py-2 text-white rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm cursor-pointer">
                    Start with Evidence
                    <svg
                      className="ml-1 h-3 w-3 inline"
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
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Product roadmap planning
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Feature prioritization
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        User story mapping
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500">
                      Roadmap Builder
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Features Prioritized
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        12 features ranked by evidence
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Roadmap Updated
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Q2 roadmap ready
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-purple-100 text-purple-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-purple-600">
                      Patterns
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Uncover hidden patterns in customer data
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Discover recurring themes, sentiment patterns, and
                    behavioral insights across all your customer touchpoints.
                    Sque&apos;s AI identifies patterns humans might miss.
                  </p>

                  <button className="bg-[#635bff] hover:bg-[#081d32] px-4 py-2 text-white rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm cursor-pointer">
                    Start with Patterns
                    <svg
                      className="ml-1 h-3 w-3 inline"
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

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Sentiment analysis
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Behavioral pattern detection
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Trend identification
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500">
                      Pattern Detection
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Pattern Analysis
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Analyzing sentiment patterns
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Themes Discovered
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        8 recurring themes found
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-orange-100 text-orange-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-orange-600">
                      Scale
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Scale customer research across your organization
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Democratize customer insights across teams. Sque makes it
                    easy for everyone to access, understand, and act on customer
                    research without needing a PhD in data science.
                  </p>

                  <button className="bg-[#635bff] hover:bg-[#081d32] px-4 py-2 text-white rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm cursor-pointer">
                    Start with Scale
                    <svg
                      className="ml-1 h-3 w-3 inline"
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
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Team collaboration tools
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Knowledge sharing
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Research democratization
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500">
                      Scale Dashboard
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Team Access
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        15 team members onboarded
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Knowledge Shared
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        47 insights shared this week
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-red-100 text-red-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-red-600">
                      Integrations
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Integrate with your existing workflow
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Connect Sque with your favorite tools. Import data from
                    Slack, Notion, Airtable, and more. Export insights directly
                    to your product management and design tools.
                  </p>

                  <button className="bg-[#635bff] hover:bg-[#081d32] px-4 py-2 text-white rounded-full font-semibold transition-colors duration-200 whitespace-nowrap shadow-sm cursor-pointer">
                    Start with Integrations
                    <svg
                      className="ml-1 h-3 w-3 inline"
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
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Slack integration
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Notion sync
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        API access
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white border rounded-2xl p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-500">
                      Integration Hub
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Connected Tools
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Slack, Notion, Airtable synced
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Data Flowing
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        156 insights exported today
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#0a2540] relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full bg-white"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <div className="mb-6">
                <span className="text-sm font-medium text-blue-300">
                  Global scale
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Turn every customer conversation into product intelligence
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Sque transforms qualitative customer feedback into quantitative
                insights. From interviews to surveys, we help product teams make
                data-driven decisions backed by real customer evidence.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-sm text-gray-300">
                    Customer interviews analyzed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-sm text-gray-300">
                    Insight accuracy rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-gray-300">
                    Product teams using Sque
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">2x</div>
                  <div className="text-sm text-gray-300">
                    Faster product decisions
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Customer Research Platform
                    </h3>
                    <p className="text-sm text-gray-400">
                      Transforming conversations into insights
                    </p>
                  </div>

                  <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute top-8 left-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-16 right-16 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-24 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-500"></div>

                    <svg className="absolute inset-0 w-full h-full">
                      <line
                        x1="48"
                        y1="32"
                        x2="64"
                        y2="64"
                        stroke="#3B82F6"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                      <line
                        x1="48"
                        y1="32"
                        x2="128"
                        y2="96"
                        stroke="#10B981"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                      <line
                        x1="64"
                        y1="96"
                        x2="128"
                        y2="96"
                        stroke="#8B5CF6"
                        strokeWidth="1"
                        opacity="0.6"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
