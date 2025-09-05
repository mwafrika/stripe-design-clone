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
                      Analysis
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Synthesize customer feedback into actionable insights
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Transform raw conversations, surveys, and feedback into
                    structured insights, themes, and evidence you can act on
                    with AI-powered analysis.
                  </p>
                  <button className="bg-[#0a2540] hover:bg-[#081d32] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Start with Analysis
                  </button>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Themes for pattern recognition
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Sentiment analysis for emotional insights
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Trends for longitudinal analysis
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
                      Analysis Dashboard
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Processing Feedback
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        1,247 responses analyzed
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Themes Identified
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        12 themes, 89% confidence
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
                      Collaboration
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Share insights across your team
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Collaborate on findings, share structured reports, and align
                    your team around customer insights with real-time
                    collaboration tools.
                  </p>
                  <button className="bg-[#0a2540] hover:bg-[#081d32] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Start with Collaboration
                  </button>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Reports for structured insights
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Dashboards for real-time monitoring
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Integrations for seamless workflows
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
                      Team Collaboration
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Shared Insights
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        5 team members active
                      </div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Live Comments
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        3 new comments
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
                      Real-time
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Get instant analysis as feedback comes in
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Process customer feedback in real-time with AI-powered
                    analysis that provides instant insights and recommendations
                    for immediate action.
                  </p>
                  <button className="bg-[#0a2540] hover:bg-[#081d32] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Start with Real-time
                  </button>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Live dashboards for monitoring
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Instant notifications for critical insights
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Automated alert systems
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
                      Real-time Processing
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Live Analysis
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Processing 23 new responses
                      </div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Instant Alerts
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        2 critical insights detected
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
                      Evidence
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Make data-driven decisions with confidence
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Back your product decisions with structured evidence and
                    themes derived from actual customer conversations and
                    feedback data.
                  </p>
                  <button className="bg-[#0a2540] hover:bg-[#081d32] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Start with Evidence
                  </button>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Confidence scoring for insights
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Evidence trails for decisions
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Audit logs for transparency
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
                      Evidence Dashboard
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Confidence Score
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        94% evidence strength
                      </div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Data Sources
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        8 sources verified
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
                      Reports
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Generate comprehensive actionable reports
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Create detailed reports with clear recommendations, next
                    steps, and strategic insights that your product team can
                    immediately implement.
                  </p>
                  <button className="bg-[#0a2540] hover:bg-[#081d32] text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
                    Start with Reports
                  </button>
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-3">See also</p>
                    <div className="space-y-2">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Custom report templates
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Automated report scheduling
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-700"
                      >
                        Executive summary generation
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
                      Report Generator
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-red-50 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Generating Report
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        47 recommendations ready
                      </div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 animate-pulse">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium text-gray-700">
                          Export Options
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">
                        PDF, Excel, PowerPoint
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
                The backbone for customer insights
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Sque makes understanding customers as easy and programmable as
                analyzing data. Our platform processes millions of conversations
                each year for ambitious businesses of all sizes.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    500K+
                  </div>
                  <div className="text-sm text-gray-300">
                    Conversations analyzed daily
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-300">Analysis accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-sm text-gray-300">
                    Languages supported
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-sm text-gray-300">
                    Real-time processing
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Global Coverage
                    </h3>
                    <p className="text-sm text-gray-400">
                      Processing insights worldwide
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
