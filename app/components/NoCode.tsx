"use client";

import React from "react";
import Image from "next/image";
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
          <Card
            padding="lg"
            className="text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-32 h-32 mx-auto mb-6">
              <Image
                src="/4.svg"
                alt="Integration Partners"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
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

          <Card
            padding="lg"
            className="text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-32 h-32 mx-auto mb-6">
              <Image
                src="/2.svg"
                alt="Research Tools"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
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

          <Card
            padding="lg"
            className="text-center hover:shadow-lg transition-shadow"
          >
            <div className="w-32 h-32 mx-auto mb-6">
              <Image
                src="/3.svg"
                alt="Research Dashboard"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
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
