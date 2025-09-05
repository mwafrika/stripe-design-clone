import React from "react";

interface DashboardVisualProps {
  title: string;
  items: Array<{
    label: string;
    value: string;
    color: "blue" | "green" | "purple" | "yellow" | "orange" | "red";
    animate?: boolean;
  }>;
}

const DashboardVisual: React.FC<DashboardVisualProps> = ({ title, items }) => {
  const getColorClasses = (color: string, animate: boolean = false) => {
    const colors = {
      blue: `bg-blue-50 ${animate ? "animate-pulse" : ""}`,
      green: `bg-green-50 ${animate ? "animate-pulse" : ""}`,
      purple: `bg-purple-50 ${animate ? "animate-pulse" : ""}`,
      yellow: `bg-yellow-50 ${animate ? "animate-pulse" : ""}`,
      orange: `bg-orange-50 ${animate ? "animate-pulse" : ""}`,
      red: `bg-red-50 ${animate ? "animate-pulse" : ""}`,
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const getDotColor = (color: string) => {
    const colors = {
      blue: "bg-blue-500",
      green: "bg-green-500",
      purple: "bg-purple-500",
      yellow: "bg-yellow-500",
      orange: "bg-orange-500",
      red: "bg-red-500",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="ml-4 text-sm text-gray-500">{title}</div>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`rounded-lg p-4 ${getColorClasses(
              item.color,
              item.animate
            )}`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className={`w-2 h-2 ${getDotColor(item.color)} rounded-full ${
                  item.animate ? "animate-pulse" : ""
                }`}
              ></div>
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            </div>
            <div className="text-xs text-gray-500">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardVisual;
