import React from "react";

export default function RadialConnections() {
  return (
    <div className="flex h-screen w-full items-center justify-center p-16">
      <div className="relative h-[200px] w-[400px]">
        {/* Red Line */}
        <svg className="absolute inset-[24px_0]" width="400" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(0)">
              <stop offset="5%" stopColor="black" />
              <stop offset="80%" stopColor="white" />
              <stop offset="95%" stopColor="black" />
            </linearGradient>
            <mask id="gradientMask">
              <rect height="400" width="400" fill="url(#gradient)">
                <animate
                  attributeName="x"
                  dur="4s"
                  from="-350%"
                  to="100%"
                  begin="0s; anim.end"
                  id="anim"
                />
              </rect>
            </mask>
          </defs>

          {/* SHORTER RED PATH */}
          <path
            d="M0,4 C130,4 130,78 260,78"
            stroke="#d9d9e0"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,4 C130,4 130,78 260,78"
            stroke="var(--sidebar-primary)"
            strokeWidth="2"
            fill="none"
            mask="url(#gradientMask)"
          />
        </svg>

        {/* Blue Line */}
        <svg className="absolute inset-[24px_0]" width="400" viewBox="0 0 400 200">

          <path
            d="M0,98 260,98 260,98"
            stroke="#d9d9e0"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,98 260,98 260,98"
            stroke="var(--sidebar-primary)"
            strokeWidth="2"
            fill="none"
            mask="url(#gradientMask)"
          />
        </svg>

        {/* Green Line */}
        <svg className="absolute inset-[24px_0]" width="400" viewBox="0 0 400 200">
          {/* SHORTER GREEN PATH */}
          <path
            d="M0,200 C130,200 130,118 260,118"
            stroke="#d9d9e0"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M0,200 C130,200 130,118 260,118"
            stroke="var(--sidebar-primary)"
            strokeWidth="2"
            fill="none"
            mask="url(#gradientMask)"
          />
        </svg>

        {/* Icons */}
        <div className="absolute left-[-40px] top-[6px] flex h-12 w-12 items-center justify-center rounded-lg bg-accent border"></div>

        <div className="absolute left-[-40px] top-[96px] flex h-12 w-12 items-center justify-center rounded-lg bg-accent border">
          🐬
        </div>

        <div className="absolute left-[-40px] top-[199px] flex h-12 w-12 items-center justify-center rounded-lg bg-accent border">
          🦜
        </div>

        <div className="absolute right-[60px] top-[82px] flex h-20 w-20 items-center justify-center rounded-lg text-4xl border">
          🧠
        </div>
      </div>
    </div>
  );
}
