import React from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "dark" | "gradient";
  padding?: "sm" | "md" | "lg" | "xl";
  id?: string;
  ariaLabelledby?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  background = "white",
  padding = "lg",
  id,
  ariaLabelledby,
}) => {
  const backgroundClasses = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900",
    gradient: "bg-gradient-to-br from-blue-50 to-purple-50",
  };

  const paddingClasses = {
    sm: "py-8",
    md: "py-16",
    lg: "py-24",
    xl: "py-32",
  };

  const classes = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section className={classes} id={id} aria-labelledby={ariaLabelledby}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
};

export default Section;
