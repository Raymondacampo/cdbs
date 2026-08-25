import React from "react";

type Variant = "right" | "left" | "straight";
type Color = "pink" | "peach" | "blush";
type Size = "sm" | "md" | "lg";

interface InclineDivProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: Variant;
  color?: Color;
  size?: Size;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  right: "rotate-2",
  left: "rotate-[-1]",
  straight: "rotate-0",
};

const colorClasses: Record<Color, string> = {
  pink: "bg-pink text-white",
  peach: "bg-peach text-dark",
  blush: "bg-blush",
};
const sizeClasses: Record<Size, string> = {
  sm: "px-3 text-sm",
  md: "px-5 text-base",
  lg: "px-7 text-8xl font-black",
};

export default function InclineDiv({
  variant = "right",
  color = "pink",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: InclineDivProps) {
  return (
    <div className={[
        "absolute w-full shadow-lg left-0 py-8 text-shadow-2xs [word-spacing:0.5rem]",
        variantClasses[variant],
        colorClasses[color],
        sizeClasses[size],
        fullWidth ? "w-full" : "",
        className,
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </div>
  );
}