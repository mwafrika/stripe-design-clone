import React from 'react';
import FeatureCard from './FeatureCard';
import DashboardVisual from './DashboardVisual';
import { features } from '../constants/features';

const Features: React.FC = () => {
  return (
    <>
      <section className="py-24 bg-white" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                iconColor={feature.iconColor}
                category={feature.category}
                title={feature.title}
                description={feature.description}
                buttonText={feature.buttonText}
                seeAlso={feature.seeAlso}
                visualContent={
                  <DashboardVisual
                    title={feature.visual.title}
                    items={feature.visual.items}
                  />
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0a2540] relative overflow-hidden" aria-labelledby="global-scale-heading">
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
              <h2 id="global-scale-heading" className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Turn every customer conversation into product intelligence
              </h2>
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Sque transforms qualitative customer feedback into quantitative
                insights. From interviews to surveys, we help product teams make
                data-driven decisions backed by real customer evidence.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">10K+</div>
                  <div className="text-sm text-gray-300">
                    Customer interviews analyzed
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-sm text-gray-300">
                    Insight accuracy rate
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-sm text-gray-300">
                    Product teams using Sque
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">2x</div>
                  <div className="text-sm text-gray-300">
                    Faster product decisions
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Customer Research Platform
                    </h3>
                    <p className="text-sm text-gray-400">
                      Transforming conversations into insights
                    </p>
                  </div>

                  <div className="relative w-full h-64 bg-gray-800 rounded-lg overflow-hidden">
                    <div className="absolute top-8 left-12 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-16 right-16 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute top-24 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute bottom-12 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
                    <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-500"></div>

                    <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
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

              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full animate-pulse" aria-hidden="true"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full animate-pulse delay-1000" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
