"use client";

import React from "react";
import Card from "./ui/Card";
import Button from "./ui/Button";

const Developers: React.FC = () => {
  return (
    <section className="pt-64 pb-16 bg-[#0a2540] relative overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-white"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 5%, 0% 20%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-white">
            <div className="mb-4">
              <span className="text-sm font-medium text-[#00d4ff]">
                Designed for developers
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ship faster with powerful and easy-to-use APIs
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Save engineering time with unified research functionality. We
              obsess over the complexity of customer feedback, research
              methodologies, and data analysis so that your teams can build what
              you need on one platform.
            </p>
            <Button
              variant="secondary"
              size="lg"
              className="bg-[#00d4ff] text-white hover:bg-[#00d4ff] border-none rounded-full"
            >
              Read the docs
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
            </Button>
          </div>

          <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 ml-4">research-api.js</span>
              </div>
              <div className="bg-gray-800 rounded p-4">
                <div className="text-blue-400">
                  <span className="text-purple-400">await</span>{" "}
                  sque.research.create({"{"}
                </div>
                <div className="ml-4 text-yellow-300">
                  projectId:{" "}
                  <span className="text-green-400">
                    &apos;customer-interviews&apos;
                  </span>
                  ,
                </div>
                <div className="ml-4 text-yellow-300">
                  type:{" "}
                  <span className="text-green-400">&apos;interviews&apos;</span>
                </div>
                <div className="text-blue-400">{"}"});</div>
              </div>
            </div>

            <div className="bg-gray-800 rounded p-4">
              <div className="text-gray-400 text-xs mb-2">
                NORMAL research-api.js
              </div>
              <div className="text-gray-300 text-xs mb-2">
                100% = 6/6 ln : 4
              </div>
              <div className="space-y-1">
                <div className="text-gray-400">
                  $ node research-api.js && sque listen
                </div>
                <div className="text-green-400">
                  &gt; Ready! Waiting for requests...
                </div>
                <div className="text-blue-400">
                  2025-01-15 19:06:30 [200] research.created
                </div>
                <div className="text-blue-400">
                  2025-01-15 19:06:30 [200] analysis.completed
                </div>
                <div className="text-blue-400">
                  2025-01-15 19:06:30 [200] insights.generated
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="p-6 bg-white/5 border-gray-600 hover:border-purple-400 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Use Sque with your stack
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              We offer client and server libraries in everything from React and
              Python to .NET and iOS.
            </p>
            <a
              href="#"
              className="text-purple-300 text-sm font-medium hover:text-purple-200 flex items-center"
            >
              See libraries
              <svg
                className="ml-1 h-3 w-3"
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
            </a>
          </Card>

          <Card className="p-6 bg-white/5 border-gray-600 hover:border-purple-400 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Build AI agents
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Create agents that can analyze research data and generate insights
              using the Sque API.
            </p>
            <a
              href="#"
              className="text-purple-300 text-sm font-medium hover:text-purple-200 flex items-center"
            >
              View docs
              <svg
                className="ml-1 h-3 w-3"
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
            </a>
          </Card>

          <Card className="p-6 bg-white/5 border-gray-600 hover:border-purple-400 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V8zm0 4a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Explore prebuilt integrations
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Connect Sque to over a hundred tools including Slack, Notion, and
              Salesforce.
            </p>
            <a
              href="#"
              className="text-purple-300 text-sm font-medium hover:text-purple-200 flex items-center"
            >
              Browse App Marketplace
              <svg
                className="ml-1 h-3 w-3"
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
            </a>
          </Card>

          <Card className="p-6 bg-white/5 border-gray-600 hover:border-purple-400 transition-colors">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">
              Build on Sque Apps
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              Create an app just for your team or for the millions of
              researchers using Sque.
            </p>
            <a
              href="#"
              className="text-purple-300 text-sm font-medium hover:text-purple-200 flex items-center"
            >
              Learn about Apps
              <svg
                className="ml-1 h-3 w-3"
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
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Developers;
