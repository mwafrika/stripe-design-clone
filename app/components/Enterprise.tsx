"use client";

import React from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";

const Enterprise: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-sm font-medium text-[#635bff]">
                Enterprise research
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Scale customer research across your organization
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform how your product teams conduct and analyze customer
              research. Sque helps enterprise teams{" "}
              <a
                href="#"
                className="text-[#635bff] underline hover:text-[#4f46e5]"
              >
                standardize research processes
              </a>{" "}
              across departments,{" "}
              <a
                href="#"
                className="text-[#635bff] underline hover:text-[#4f46e5]"
              >
                scale qualitative analysis
              </a>
              , and{" "}
              <a
                href="#"
                className="text-[#635bff] underline hover:text-[#4f46e5]"
              >
                democratize insights
              </a>{" "}
              throughout your organization with AI-powered research workflows.
            </p>

            <Button variant="primary" className="mb-12">
              Explore Sque for enterprises
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
            </Button>

            <div className="space-y-8">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10x</div>
                <div className="text-sm text-gray-500">
                  faster research analysis with AI
                </div>
              </div>

              <div>
                <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                <div className="text-sm text-gray-500">
                  reduction in manual research time
                </div>
              </div>

              <div>
                <div className="text-lg font-bold text-gray-900 mb-4">
                  Research capabilities
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-[#635bff] to-blue-400 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <span className="text-sm text-gray-500">
                      Interview Analysis
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm text-gray-500">
                      Survey Synthesis
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <Card className="relative overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-105 p-0">
              <div className="relative h-96 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 transition-all duration-500 group-hover:from-blue-800 group-hover:via-blue-700 group-hover:to-blue-600">
                <div className="absolute inset-0 bg-gradient-to-t from-green-600 via-green-500 to-green-400 opacity-30 transition-all duration-500 group-hover:opacity-40"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-800 to-transparent transition-all duration-500 group-hover:from-gray-900"></div>

                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gray-800 rounded-lg transition-all duration-500 group-hover:scale-110 group-hover:bottom-10">
                  <div className="absolute top-1 left-2 right-2 h-2 bg-gray-600 rounded transition-all duration-500 group-hover:bg-gray-500"></div>
                  <div className="absolute bottom-1 left-1 right-1 h-1 bg-gray-400 rounded transition-all duration-500 group-hover:bg-gray-300"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-white font-mono transition-all duration-500 group-hover:text-gray-200">
                    MOTH 7650 E
                  </div>
                </div>

                <div className="absolute top-6 left-6 transition-all duration-500 group-hover:top-4 group-hover:left-4">
                  <div className="bg-white px-3 py-1 rounded text-sm font-bold text-gray-900 transition-all duration-500 group-hover:bg-gray-100 group-hover:shadow-lg">
                    Notion
                  </div>
                </div>

                <div className="absolute top-6 right-6 transition-all duration-500 group-hover:top-4 group-hover:right-4">
                  <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center transition-all duration-500 group-hover:bg-white/30 group-hover:shadow-lg">
                    <svg
                      className="w-4 h-4 text-white transition-all duration-500 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6 transition-all duration-500 group-hover:from-gray-800">
                  <h3 className="text-white text-xl font-bold leading-tight transition-all duration-500 group-hover:text-gray-100">
                    See how Notion scaled customer research with Sque
                  </h3>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-transparent border-transparent text-white hover:bg-transparent hover:border-transparent"
                    >
                      Read more
                      <svg
                        className="ml-2 w-4 h-4"
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
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-center gap-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="text-gray-600 font-medium">Notion</span>
            </div>

            <div className="w-px h-8 bg-gray-300"></div>

            <div className="text-gray-600 font-bold text-lg">Slack</div>

            <div className="w-px h-8 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">F</span>
              </div>
              <span className="text-gray-600 font-bold">Figma</span>
            </div>

            <div className="w-px h-8 bg-gray-300"></div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-gray-600 font-bold">Linear</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
