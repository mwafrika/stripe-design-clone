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
    id: "banking",
    title: "Banking-as-a-service",
    description:
      "Embed financial services, including accounts, cards, and lending, to create tailored in-product experiences for your customers.",
    linkText: "Learn more",
    logos: ["Karat", "shopify", "PERSONA"],
    logoImages: ["/openai.svg", "/amazon.svg", "/google.svg"],
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    description:
      "Access an optimized suite of tools to accept payments online and in person from customers around the world.",
    linkText: "Learn more",
    logos: ["Glossier.", "dermalogica", "INDOCHINO"],
    logoImages: ["/anthropic.svg", "/marriott.svg", "/shopify.svg"],
  },
  {
    id: "crypto",
    title: "Crypto",
    description:
      "Embed crypto purchase flows into your checkout flow—with authorization optimization and fraud protection built in.",
    linkText: "Learn more",
    logos: ["Blockchain.com"],
    logoImages: ["/airbnb.svg"],
  },
  {
    id: "marketplace",
    title: "Marketplace",
    description:
      "Connect buyers and sellers with a complete payments platform that scales with your marketplace business.",
    linkText: "Learn more",
    logos: ["deliveroo", "Airbnb", "Uber"],
    logoImages: ["/uber.svg", "/airbnb.svg", "/shopify.svg"],
  },
  {
    id: "saas",
    title: "SaaS",
    description:
      "Build and scale subscription-based software with flexible billing, invoicing, and revenue recognition tools.",
    linkText: "Learn more",
    logos: ["Slack", "Notion", "Figma"],
    logoImages: ["/openai.svg", "/google.svg", "/anthropic.svg"],
  },
  {
    id: "marketplace-2",
    title: "Marketplace",
    description:
      "Connect buyers and sellers with a complete payments platform that scales with your marketplace business.",
    linkText: "Learn more",
    logos: ["deliveroo", "Airbnb", "Uber"],
    logoImages: ["/marriott.svg", "/shopify.svg", "/uber.svg"],
  },
  {
    id: "fintech",
    title: "Fintech",
    description:
      "Launch financial products with compliance, risk management, and regulatory tools built for modern finance.",
    linkText: "Learn more",
    logos: ["Plaid", "Chime", "Robinhood"],
    logoImages: ["/google.svg", "/amazon.svg", "/openai.svg"],
  },
  {
    id: "gaming",
    title: "Gaming",
    description:
      "Monetize games with in-app purchases, subscriptions, and virtual economies that scale globally.",
    linkText: "Learn more",
    logos: ["Epic Games", "Unity", "Roblox"],
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
              Support for any business type
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              From global AI companies to category-defining marketplaces,
              successful businesses across industries grow and scale with Sque.
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
