import React from "react";
import Image from "next/image";
import Card from "./ui/Card";
import Button from "./ui/Button";

interface FeatureCardProps {
  icon: string;
  iconColor: "blue" | "green" | "purple" | "orange" | "red";
  category: string;
  title: string;
  description: string;
  buttonText: string;
  seeAlso: string[];
  image: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  iconColor,
  category,
  title,
  description,
  buttonText,
  seeAlso,
  image,
}) => {
  const getIconColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      orange: "bg-orange-100 text-orange-600",
      red: "bg-red-100 text-red-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <Card padding="lg">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${getIconColorClasses(
                iconColor
              )}`}
            >
              {icon.startsWith("/") ? (
                <Image
                  src={icon}
                  alt={category}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={icon}
                  />
                </svg>
              )}
            </div>
            <span className={`text-sm font-medium text-${iconColor}-600`}>
              {category}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
          <Button variant="primary">
            {buttonText}
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
          </Button>
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-3">See also</p>
            <div className="space-y-2">
              {seeAlso.map((item, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block text-sm text-blue-600 hover:text-blue-700"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <div>
        <Card padding="none">
          <div className="flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={400}
              height={300}
              className="max-w-full w-full h-auto rounded-lg"
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FeatureCard;
