import React from "react";
import Link from "next/link";
import Button from "./Button";
import Icon from "./Icon";

interface HeaderProps {
  logo?: {
    text: string;
    icon?: string;
    href?: string;
  };
  navigation?: Array<{
    label: string;
    href?: string;
    hasDropdown?: boolean;
  }>;
  actions?: Array<{
    label: string;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    href?: string;
    onClick?: () => void;
  }>;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({
  logo = { text: "sque", href: "/" },
  navigation = [],
  actions = [],
  className = "",
}) => {
  return (
    <header className={`flex items-center justify-between py-6 ${className}`}>
      {/* Logo */}
      <Link href={logo.href || "/"} className="flex items-center gap-2">
        {logo.icon && (
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">{logo.icon}</span>
          </div>
        )}
        <span className="text-xl font-semibold text-white">{logo.text}</span>
      </Link>

      {/* Navigation */}
      {navigation.length > 0 && (
        <nav className="hidden lg:flex items-center gap-8">
          {navigation.map((item, index) => (
            <button
              key={index}
              className="text-sm text-white/80 hover:text-white group relative"
            >
              {item.label}
              {item.hasDropdown && (
                <Icon name="chevronDown" size="sm" className="ml-1 inline" />
              )}
            </button>
          ))}
        </nav>
      )}

      {/* Actions */}
      {actions.length > 0 && (
        <div className="flex items-center gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant || "outline"}
              size={action.size || "md"}
              href={action.href}
              onClick={action.onClick}
              className={action.variant === "outline" ? "rounded-full" : ""}
            >
              {action.label}
              {action.variant === "outline" && (
                <Icon name="arrowRight" size="sm" className="ml-1 inline" />
              )}
            </Button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
