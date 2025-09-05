import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  shadow?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = "",
  padding = "none",
  shadow = "sm",
  border = true,
}) => {
  const baseClasses = "bg-white rounded-2xl";

  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
  };

  const borderClasses = border ? "border border-gray-200" : "";

  const classes = `${baseClasses} ${paddingClasses[padding]} ${shadowClasses[shadow]} ${borderClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
