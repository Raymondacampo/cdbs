import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className = "" }: HeadingProps) {
  return <h1 className={`h1 ${className}`}>{children}</h1>;
}

export function H2({ children, className = "" }: HeadingProps) {
  return <h2 className={`h2 ${className}`}>{children}</h2>;
}

export function H3({ children, className = "" }: HeadingProps) {
  return <h3 className={`h3 ${className}`}>{children}</h3>;
}

export function H4({ children, className = "" }: HeadingProps) {
  return <h4 className={`h4 ${className}`}>{children}</h4>;
}

export function H5({ children, className = "" }: HeadingProps) {
  return <h5 className={`h5 ${className}`}>{children}</h5>;
}
