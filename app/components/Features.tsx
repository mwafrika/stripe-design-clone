"use client";

import React, { useState, useEffect } from "react";
import FeatureCard from "./FeatureCard";
import { features } from "../constants/features";

const Features: React.FC = () => {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features-section");
      if (!featuresSection) return;

      const rect = featuresSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top > windowHeight || rect.bottom < 0) return;

      const sectionHeight = rect.height;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight * 0.5 - rect.top) / sectionHeight)
      );

      const featureProgress = scrollProgress * features.length;
      const newIndex = Math.min(
        features.length - 1,
        Math.max(0, Math.floor(featureProgress))
      );

      setCurrentFeatureIndex(newIndex);
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  return (
    <>
      <section
        id="features-section"
        className="py-24 bg-[#F6F9FC]"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature, index) => {
              const isActive = index === currentFeatureIndex;
              const isPrevious = index === currentFeatureIndex - 1;
              const isNext = index === currentFeatureIndex + 1;

              return (
                <div
                  key={feature.id}
                  className={`transition-all duration-1000 ease-in-out transform ${
                    isActive
                      ? "opacity-100 scale-100 translate-y-0"
                      : isPrevious || isNext
                      ? "opacity-60 scale-95 translate-y-4"
                      : "opacity-20 scale-90 translate-y-8"
                  }`}
                  style={{
                    transform: isActive
                      ? "translateY(0) scale(1)"
                      : isPrevious
                      ? "translateY(20px) scale(0.95)"
                      : isNext
                      ? "translateY(-20px) scale(0.95)"
                      : "translateY(40px) scale(0.9)",
                  }}
                >
                  <FeatureCard
                    icon={feature.icon}
                    iconColor={feature.iconColor}
                    category={feature.category}
                    title={feature.title}
                    description={feature.description}
                    buttonText={feature.buttonText}
                    seeAlso={feature.seeAlso}
                    image={feature.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="pt-64 pb-16 bg-[#0a2540] relative overflow-hidden"
        aria-labelledby="global-scale-heading"
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-white"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 5%, 0% 20%)",
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
              <h2
                id="global-scale-heading"
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                The backbone for global commerce
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Sque makes moving money as easy and programmable as moving data.
                Our teams are based in offices around the world and we process
                hundreds of billions of dollars each year for ambitious
                businesses of all sizes.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    500M+
                  </div>
                  <div className="text-sm text-gray-300">
                    API requests per day, peaking at 13,000 requests a second.
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    99.999%
                  </div>
                  <div className="text-sm text-gray-300">
                    historical uptime for Sque services.
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">90%</div>
                  <div className="text-sm text-gray-300">
                    of U.S. adults have bought from businesses using Sque.
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">135+</div>
                  <div className="text-sm text-gray-300">
                    currencies and payment methods supported.
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#1a2332] rounded-2xl p-8 border border-gray-700">
                  <div className="relative w-full h-80 bg-[#0f1419] rounded-lg overflow-hidden">
                    {/* World Map with dots */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 400 200"
                    >
                      {/* North America */}
                      <g className="opacity-60">
                        <circle cx="80" cy="60" r="1" fill="#60a5fa" />
                        <circle cx="85" cy="65" r="1" fill="#60a5fa" />
                        <circle cx="90" cy="70" r="1" fill="#60a5fa" />
                        <circle cx="75" cy="75" r="1" fill="#60a5fa" />
                        <circle cx="95" cy="55" r="1" fill="#60a5fa" />
                        <circle cx="100" cy="80" r="1" fill="#60a5fa" />
                        <circle cx="70" cy="85" r="1" fill="#60a5fa" />
                        <circle cx="105" cy="70" r="1" fill="#60a5fa" />
                        <circle cx="65" cy="90" r="1" fill="#60a5fa" />
                        <circle cx="110" cy="60" r="1" fill="#60a5fa" />
                      </g>

                      {/* Europe */}
                      <g className="opacity-60">
                        <circle cx="180" cy="50" r="1" fill="#60a5fa" />
                        <circle cx="185" cy="55" r="1" fill="#60a5fa" />
                        <circle cx="190" cy="60" r="1" fill="#60a5fa" />
                        <circle cx="175" cy="65" r="1" fill="#60a5fa" />
                        <circle cx="195" cy="45" r="1" fill="#60a5fa" />
                        <circle cx="200" cy="70" r="1" fill="#60a5fa" />
                        <circle cx="170" cy="75" r="1" fill="#60a5fa" />
                        <circle cx="205" cy="50" r="1" fill="#60a5fa" />
                        <circle cx="165" cy="80" r="1" fill="#60a5fa" />
                        <circle cx="210" cy="40" r="1" fill="#60a5fa" />
                      </g>

                      {/* Asia */}
                      <g className="opacity-60">
                        <circle cx="280" cy="60" r="1" fill="#60a5fa" />
                        <circle cx="285" cy="65" r="1" fill="#60a5fa" />
                        <circle cx="290" cy="70" r="1" fill="#60a5fa" />
                        <circle cx="275" cy="75" r="1" fill="#60a5fa" />
                        <circle cx="295" cy="55" r="1" fill="#60a5fa" />
                        <circle cx="300" cy="80" r="1" fill="#60a5fa" />
                        <circle cx="270" cy="85" r="1" fill="#60a5fa" />
                        <circle cx="305" cy="70" r="1" fill="#60a5fa" />
                        <circle cx="265" cy="90" r="1" fill="#60a5fa" />
                        <circle cx="310" cy="60" r="1" fill="#60a5fa" />
                      </g>

                      {/* South America */}
                      <g className="opacity-60">
                        <circle cx="120" cy="140" r="1" fill="#60a5fa" />
                        <circle cx="125" cy="145" r="1" fill="#60a5fa" />
                        <circle cx="130" cy="150" r="1" fill="#60a5fa" />
                        <circle cx="115" cy="155" r="1" fill="#60a5fa" />
                        <circle cx="135" cy="135" r="1" fill="#60a5fa" />
                        <circle cx="140" cy="160" r="1" fill="#60a5fa" />
                        <circle cx="110" cy="165" r="1" fill="#60a5fa" />
                        <circle cx="145" cy="150" r="1" fill="#60a5fa" />
                        <circle cx="105" cy="170" r="1" fill="#60a5fa" />
                        <circle cx="150" cy="140" r="1" fill="#60a5fa" />
                      </g>

                      {/* Africa */}
                      <g className="opacity-60">
                        <circle cx="200" cy="120" r="1" fill="#60a5fa" />
                        <circle cx="205" cy="125" r="1" fill="#60a5fa" />
                        <circle cx="210" cy="130" r="1" fill="#60a5fa" />
                        <circle cx="195" cy="135" r="1" fill="#60a5fa" />
                        <circle cx="215" cy="115" r="1" fill="#60a5fa" />
                        <circle cx="220" cy="140" r="1" fill="#60a5fa" />
                        <circle cx="190" cy="145" r="1" fill="#60a5fa" />
                        <circle cx="225" cy="120" r="1" fill="#60a5fa" />
                        <circle cx="185" cy="150" r="1" fill="#60a5fa" />
                        <circle cx="230" cy="110" r="1" fill="#60a5fa" />
                      </g>

                      {/* Australia */}
                      <g className="opacity-60">
                        <circle cx="320" cy="150" r="1" fill="#60a5fa" />
                        <circle cx="325" cy="155" r="1" fill="#60a5fa" />
                        <circle cx="330" cy="160" r="1" fill="#60a5fa" />
                        <circle cx="315" cy="165" r="1" fill="#60a5fa" />
                        <circle cx="335" cy="145" r="1" fill="#60a5fa" />
                        <circle cx="340" cy="170" r="1" fill="#60a5fa" />
                        <circle cx="310" cy="175" r="1" fill="#60a5fa" />
                        <circle cx="345" cy="150" r="1" fill="#60a5fa" />
                        <circle cx="305" cy="180" r="1" fill="#60a5fa" />
                        <circle cx="350" cy="140" r="1" fill="#60a5fa" />
                      </g>

                      {/* Connection lines */}
                      <g className="opacity-40">
                        {/* Yellow lines */}
                        <path
                          d="M 80 60 Q 150 100 200 50"
                          stroke="#fbbf24"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M 100 80 Q 170 120 220 70"
                          stroke="#fbbf24"
                          strokeWidth="1"
                          fill="none"
                        />

                        {/* Purple lines */}
                        <path
                          d="M 180 50 Q 250 90 300 60"
                          stroke="#a855f7"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M 200 70 Q 270 110 320 80"
                          stroke="#a855f7"
                          strokeWidth="1"
                          fill="none"
                        />

                        {/* Pink lines */}
                        <path
                          d="M 120 140 Q 190 100 250 120"
                          stroke="#ec4899"
                          strokeWidth="1"
                          fill="none"
                        />
                        <path
                          d="M 140 160 Q 210 120 270 140"
                          stroke="#ec4899"
                          strokeWidth="1"
                          fill="none"
                        />
                      </g>

                      {/* Glowing markers */}
                      <circle
                        cx="80"
                        cy="60"
                        r="3"
                        fill="#60a5fa"
                        className="animate-pulse"
                      >
                        <circle cx="0" cy="0" r="1" fill="white" />
                      </circle>
                      <circle
                        cx="200"
                        cy="50"
                        r="2"
                        fill="#fbbf24"
                        className="animate-pulse delay-300"
                      />
                      <circle
                        cx="280"
                        cy="60"
                        r="2"
                        fill="#a855f7"
                        className="animate-pulse delay-700"
                      />
                      <circle
                        cx="120"
                        cy="140"
                        r="2"
                        fill="#ec4899"
                        className="animate-pulse delay-500"
                      />
                      <circle
                        cx="320"
                        cy="150"
                        r="2"
                        fill="#10b981"
                        className="animate-pulse delay-1000"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full animate-pulse delay-1000"
                aria-hidden="true"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
