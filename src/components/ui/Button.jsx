import React from "react";

/**
 * Reusable Button component supporting both <button> and <a> links.
 * Variants: primary | secondary | outline | ghost
 * Sizes: sm | md | lg
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  className = "",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-semibold rounded-full transition-all duration-200 select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 active:scale-[0.98]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs sm:text-sm gap-1.5",
    md: "px-6 sm:px-7 py-3 sm:py-3.5 text-sm sm:text-base gap-2",
    lg: "px-8 py-4 text-base sm:text-lg gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-[#4A1A6B] hover:bg-[#381254] text-white shadow-[0_4px_16px_rgba(74,26,107,0.3)] hover:shadow-[0_6px_22px_rgba(74,26,107,0.45)] hover:-translate-y-0.5",
    secondary:
      "border border-[#ECE2E6] bg-white hover:bg-[#FAF7FC] text-[#23092F] shadow-xs hover:border-[#D6C2CE] hover:-translate-y-0.5",
    outline:
      "border-2 border-[#4A1A6B] text-[#4A1A6B] bg-transparent hover:bg-[#F5EDF8]/60 hover:-translate-y-0.5",
    ghost:
      "text-[#6B4F66] hover:text-[#23092F] hover:bg-[#FAF7FC]",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0 leading-none">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === "right" && (
        <span className="shrink-0 leading-none">{icon}</span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
