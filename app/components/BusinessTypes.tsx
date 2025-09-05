"use client";

import React, { useState } from "react";
import Image from "next/image";
import Card from "./ui/Card";

interface BusinessType {
  id: string;
  title: string;
  description: string;
  linkText: string;
  logos: string[];
  logoImages: string[];
}

const businessTypes: BusinessType[] = [
  {
    id: "customer-research",
    title: "Customer Research",
    description:
      "Transform customer interviews, surveys, and feedback into structured insights and actionable product decisions with AI-powered analysis.",
    linkText: "Learn more",
    logos: ["Stripe", "Notion", "Figma"],
    logoImages: ["/openai.svg", "/amazon.svg", "/google.svg"],
  },
  {
    id: "product-insights",
    title: "Product Insights",
    description:
      "Turn qualitative customer conversations into quantitative insights that drive product strategy and feature prioritization.",
    linkText: "Learn more",
    logos: ["Slack", "Airtable", "Linear"],
    logoImages: ["/anthropic.svg", "/marriott.svg", "/shopify.svg"],
  },
  {
    id: "feedback-analysis",
    title: "Feedback Analysis",
    description:
      "Automatically analyze and synthesize customer feedback from multiple sources to identify patterns and themes.",
    linkText: "Learn more",
    logos: ["Intercom", "Zendesk"],
    logoImages: ["/airbnb.svg"],
  },
  {
    id: "user-interviews",
    title: "User Interviews",
    description:
      "Streamline interview analysis with AI that extracts key insights, themes, and evidence from customer conversations.",
    linkText: "Learn more",
    logos: ["Calendly", "Zoom", "Loom"],
    logoImages: ["/uber.svg", "/airbnb.svg", "/shopify.svg"],
  },
  {
    id: "survey-synthesis",
    title: "Survey Synthesis",
    description:
      "Process and analyze survey responses at scale to uncover user needs, pain points, and opportunities for improvement.",
    linkText: "Learn more",
    logos: ["Typeform", "SurveyMonkey", "Google Forms"],
    logoImages: ["/openai.svg", "/google.svg", "/anthropic.svg"],
  },
  {
    id: "product-decisions",
    title: "Product Decisions",
    description:
      "Make data-driven product decisions backed by comprehensive customer research and evidence-based insights.",
    linkText: "Learn more",
    logos: ["Jira", "Asana", "Monday.com"],
    logoImages: ["/marriott.svg", "/shopify.svg", "/uber.svg"],
  },
  {
    id: "team-collaboration",
    title: "Team Collaboration",
    description:
      "Share insights across your product team with structured reports and collaborative research workflows.",
    linkText: "Learn more",
    logos: ["Notion", "Confluence", "Miro"],
    logoImages: ["/google.svg", "/amazon.svg", "/openai.svg"],
  },
  {
    id: "ai-research",
    title: "AI Research",
    description:
      "Leverage AI to accelerate research analysis and turn hours of manual work into minutes of automated insights.",
    linkText: "Learn more",
    logos: ["OpenAI", "Anthropic", "Claude"],
    logoImages: ["/anthropic.svg", "/marriott.svg", "/airbnb.svg"],
  },
];

const BusinessTypes: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const cardsPerPage = 3;
  const maxPages = Math.ceil(businessTypes.length / cardsPerPage);

  const nextCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.min(prev + 1, maxPages - 1));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevCard = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const getVisibleCards = () => {
    const startIndex = currentIndex * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return businessTypes.slice(startIndex, endIndex);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-start justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Research workflows for every team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From customer interviews to survey analysis, Sque helps product
              teams turn qualitative feedback into quantitative insights that
              drive better decisions.
            </p>
          </div>

          <div className="flex gap-3 ml-8 mt-32">
            <button
              onClick={prevCard}
              disabled={isTransitioning || currentIndex === 0}
              className="w-12 h-12 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Previous cards"
            >
              <svg
                className="w-5 h-5 text-[#635bff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 12H5m7-7l-7 7 7 7"
                />
              </svg>
            </button>
            <button
              onClick={nextCard}
              disabled={isTransitioning || currentIndex === maxPages - 1}
              className="w-12 h-12 cursor-pointer rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Next cards"
            >
              <svg
                className="w-5 h-5 text-[#635bff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14m-7-7l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getVisibleCards().map((businessType) => (
              <Card
                key={businessType.id}
                className="h-80 border-t-8 hover:shadow-lg transition-shadow duration-200 !border-t-[#635bff]"
              >
                <div className="h-full flex flex-col p-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {businessType.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {businessType.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <a
                      href="#"
                      className="text-[#635bff] hover:text-[#4f46e5] font-medium text-sm inline-flex items-center mb-4 transition-colors duration-200"
                    >
                      {businessType.linkText}
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
                    </a>

                    <div className="flex flex-wrap gap-4 items-center">
                      {businessType.logoImages.map((logoImage, index) => (
                        <Image
                          key={index}
                          src={logoImage}
                          alt={businessType.logos[index] || "Company logo"}
                          width={24}
                          height={24}
                          className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-200"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Dots Indicator for improvements purposes */}
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? "bg-[#635bff]" : "bg-gray-300"
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessTypes;
