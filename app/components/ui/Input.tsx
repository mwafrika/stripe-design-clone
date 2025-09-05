import React from "react";

interface InputProps {
  type?: "text" | "email" | "password" | "number" | "tel" | "url";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outline";
  error?: boolean;
  errorMessage?: string;
  label?: string;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  className = "",
  disabled = false,
  required = false,
  name,
  id,
  autoComplete,
  size = "md",
  variant = "default",
  error = false,
  errorMessage,
  label,
  helperText,
}) => {
  const baseClasses =
    "w-full border border-transparent transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeClasses = {
    sm: "px-3 py-2 text-sm rounded-md",
    md: "px-5 py-4 text-base rounded-full",
    lg: "px-6 py-5 text-lg rounded-lg",
  };

  const variantClasses = {
    default:
      "bg-white border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
    filled:
      "bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
    outline:
      "bg-transparent border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  };

  const errorClasses = error
    ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
    : "";

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${className}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        autoComplete={autoComplete}
        className={classes}
      />
      {error && errorMessage && (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      )}
      {helperText && !error && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
