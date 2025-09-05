"use client";

import React from "react";
import Card from "./ui/Card";
import Input from "./ui/Input";

const Growth: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-sm font-medium text-[#635bff]">
              Built for growth
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Take your research further, faster
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Build better products with AI-powered research workflows. From
            customer interviews to survey analysis, Sque helps you scale
            research insights across your entire organization.
          </p>
        </div>

        <div className="flex gap-8 max-w-6xl mx-auto">
          <div className="flex-1 space-y-8 mt-12">
            <Card className="p-6 bg-gray-50">
              <div className="space-y-4">
                <div className="w-full bg-white rounded-lg p-4">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Research
                    </h4>
                    <div className="space-y-1">
                      <a
                        href="#"
                        className="block text-sm text-blue-600 hover:text-blue-800"
                      >
                        Overview
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-gray-800"
                      >
                        Projects
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-gray-800"
                      >
                        Templates
                      </a>
                      <a
                        href="#"
                        className="block text-sm text-gray-600 hover:text-gray-800"
                      >
                        Integrations
                      </a>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-900">
                      Customer Research Project
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-700">
                          Set up research project
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-700">
                          Conduct interviews
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-700">
                          Analyze with AI
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-green-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-gray-700">
                          Generate insights
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-blue-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-xs font-medium text-gray-900">
                          Open research workspace
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-yellow-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2L3 7v11a1 1 0 001 1h12a1 1 0 001-1V7l-7-5zM8 15a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Start with customer interviews
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Conduct structured interviews and automatically extract key
                  insights, themes, and evidence from customer conversations.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-4">
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="jane.diaz@example.com"
                      className="w-full"
                      size="sm"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Research Information
                    </label>
                    <div className="space-y-2">
                      <Input
                        type="text"
                        placeholder="Research project name"
                        className="w-full"
                        size="sm"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="text"
                          placeholder="Start date"
                          className="w-full"
                          size="sm"
                        />
                        <Input
                          type="text"
                          placeholder="End date"
                          className="w-full"
                          size="sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Research type
                    </label>
                    <Input
                      type="text"
                      placeholder="Customer interviews"
                      className="w-full"
                      size="sm"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-purple-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Analyze survey responses
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Process and analyze survey responses at scale to uncover user
                  needs, pain points, and opportunities.
                </p>
              </div>
            </Card>
          </div>

          <div className="flex-1 space-y-8">
            <Card className="p-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="text-sm font-medium text-gray-900">
                    Research insights
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Previous period
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      47 insights
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Current period
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      23 insights
                    </span>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-end gap-1 h-16">
                      <div
                        className="w-6 bg-green-400 rounded-t"
                        style={{ height: "60%" }}
                      ></div>
                      <div
                        className="w-6 bg-green-400 rounded-t"
                        style={{ height: "80%" }}
                      ></div>
                      <div
                        className="w-6 bg-green-400 rounded-t"
                        style={{ height: "45%" }}
                      ></div>
                      <div
                        className="w-6 bg-green-400 rounded-t"
                        style={{ height: "70%" }}
                      ></div>
                      <div
                        className="w-6 bg-green-400 rounded-t"
                        style={{ height: "90%" }}
                      ></div>
                      <div
                        className="w-6 bg-green-400 rounded-t"
                        style={{ height: "55%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Validate your ideas
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Test your product ideas with rapid customer feedback analysis
                  and validation workflows.
                </p>
              </div>
            </Card>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="text-right">
                        <div className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-lg">
                          anything I can help with today?
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-2 rounded-lg">
                          Hey, can I get insights for my research?
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="inline-block bg-white text-gray-800 text-xs px-3 py-2 rounded-lg border">
                          Sure, I&apos;d recommend our customer research
                          workflow.
                        </div>
                      </div>
                      <div className="text-left">
                        <div className="inline-block bg-white text-blue-600 text-xs px-3 py-2 rounded-lg border">
                          research.sque.ai/start
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-32">
                    <div className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-lg font-bold text-gray-900 mb-2">
                        $99
                      </div>
                      <div className="text-xs text-gray-600 mb-3">
                        FOR RESEARCH
                      </div>
                      <div className="w-20 h-20 bg-gray-200 rounded mx-auto mb-2 flex items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-400"
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
                      <div className="text-xs text-gray-500">Scan to start</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-green-600"
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
                  <h3 className="text-lg font-bold text-gray-900">
                    Generate research reports
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  Automatically create comprehensive research reports with
                  insights, themes, and actionable recommendations for your
                  product team.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
