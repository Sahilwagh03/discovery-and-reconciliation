import React from "react";

export default function Logo({
  width = 24,
  height = 24,
  color = "currentColor",
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width}
      height={height}
      stroke={color}
      fill="none"
      className={className}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M344 280l88-88M232 216l64 64M80 320l104-104"
      />
      <circle
        cx="456"
        cy="168"
        r="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="320"
        cy="304"
        r="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="208"
        cy="192"
        r="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <circle
        cx="56"
        cy="344"
        r="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}
