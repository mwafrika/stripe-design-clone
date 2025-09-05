"use client";

import React from "react";
import Card from "./ui/Card";

const NoCode: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-4">
            <span className="text-sm font-medium text-[#00d4ff]">
              Get started quickly
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Easy ways to start your research journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Whether you&apos;re a solo researcher or part of a large team, Sque
            offers multiple ways to get started with AI-powered research
            workflows that fit your technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-20 h-20 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">S</span>
                </div>
              </div>

              <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center">
                  <span className="text-xs font-semibold text-gray-800">
                    SQUARESPACE
                  </span>
                </div>
              </div>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs font-semibold text-white">
                    intuit
                  </span>
                </div>
              </div>

              <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
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
              </div>

              <div className="absolute bottom-1/2 right-2 transform translate-y-1/2">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Connect with your existing tools
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Integrate Sque with your favorite research tools and platforms.
              Connect to{" "}
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium"
              >
                Notion
              </a>
              ,{" "}
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium"
              >
                Slack
              </a>
              , and{" "}
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium"
              >
                Google Workspace
              </a>{" "}
              for seamless research workflows.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-32 h-32 mx-auto mb-6 relative">
              <div className="w-full h-full bg-blue-50 rounded-lg flex items-center justify-center">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                  </div>
                  <div className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white text-sm font-bold">S</span>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Get help from research experts
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Work with our team of research methodology experts who can help
              you design, implement, and optimize your research workflows using
              Sque&apos;s AI-powered tools.
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-32 h-32 mx-auto mb-6">
              <div className="w-full h-full bg-white border-2 border-gray-200 rounded-lg p-3 shadow-sm">
                <div className="text-left">
                  <div className="mb-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xs font-semibold text-gray-900">
                        Research Dashboard
                      </h4>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-500 mb-2">
                      Active Projects: 3
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="bg-blue-50 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-blue-900">
                          Customer Interviews
                        </span>
                        <span className="text-xs text-blue-600">85%</span>
                      </div>
                      <div className="w-full bg-blue-200 rounded-full h-1">
                        <div
                          className="bg-blue-500 h-1 rounded-full"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-green-900">
                          Survey Analysis
                        </span>
                        <span className="text-xs text-green-600">60%</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-1">
                        <div
                          className="bg-green-500 h-1 rounded-full"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded p-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-purple-900">
                          User Testing
                        </span>
                        <span className="text-xs text-purple-600">30%</span>
                      </div>
                      <div className="w-full bg-purple-200 rounded-full h-1">
                        <div
                          className="bg-purple-500 h-1 rounded-full"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Start with our research templates
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Launch{" "}
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium"
              >
                customer interviews
              </a>
              , create{" "}
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium"
              >
                survey campaigns
              </a>
              , or set up{" "}
              <a
                href="#"
                className="text-[#00d4ff] hover:text-[#0099cc] font-medium"
              >
                automated analysis
              </a>{" "}
              workflows directly from your dashboard to start gathering insights
              in minutes - no coding required.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NoCode;
