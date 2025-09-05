"use client";

import React from "react";
import Button from "./ui/Button";

const GetStarted: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-purple-200 to-blue-200 opacity-30"
        style={{ clipPath: "polygon(0% 100%, 100% 100%, 100% 60%, 0% 80%)" }}
      ></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to transform your research?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start building better products with AI-powered research workflows.
              Get instant access to Sque&apos;s research platform or speak with
              our team about enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-[#00d4ff] text-white hover:bg-[#0099cc] border-none rounded-full"
              >
                Start researching
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
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-gray-900 border-gray-300 hover:bg-gray-50 rounded-full"
              >
                Talk to experts
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
          </div>

          <div className="lg:col-span-1">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparent research pricing
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Clear per-project pricing with no hidden fees. Scale your
                research as your team grows.
              </p>
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium inline-flex items-center"
              >
                View pricing
                <svg
                  className="ml-1 h-4 w-4"
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
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Launch research projects
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Set up customer interviews, surveys, and user testing workflows
                in minutes with our AI-powered research platform.
              </p>
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium inline-flex items-center"
              >
                Get started guide
                <svg
                  className="ml-1 h-4 w-4"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
