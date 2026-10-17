import React from 'react';

interface BrandLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  variant = 'light',
  showTagline = false,
}) => {
  const isDark = variant === 'dark';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Spheroid + Microfluidic Emblem */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Microfluidic Outer Flow Channels */}
          <path
            d="M 2 20 H 12 C 14 20, 16 14, 20 14 C 24 14, 26 20, 28 20 H 38"
            stroke="#008B61"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="opacity-75"
          />
          <path
            d="M 6 26 H 14 C 16 26, 18 20, 20 20 C 22 20, 24 26, 26 26 H 34"
            stroke="#153D38"
            strokeWidth="1.8"
            strokeLinecap="round"
            className="opacity-60"
          />
          {/* 3D Cell Spheroid Cluster */}
          <circle cx="20" cy="20" r="9" fill="#008B61" />
          <circle cx="23" cy="17" r="4.5" fill="#A20C12" />
          <circle cx="17.5" cy="22" r="3.2" fill="#153D38" className="opacity-90" />
          <circle cx="19" cy="16.5" r="2.2" fill="#F3F8F6" className="opacity-80" />
          {/* Orbiting micro-dots */}
          <circle cx="9" cy="14" r="1.5" fill="#008B61" />
          <circle cx="31" cy="26" r="1.5" fill="#A20C12" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-extrabold text-xl tracking-tight leading-none ${
            isDark ? 'text-white' : 'text-[#153D38]'
          }`}
        >
          NanoOnco<span className="text-[#008B61]">3D</span>
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase text-emerald-700/80 font-mono mt-0.5 font-semibold">
            Biotecnologia Translacional
          </span>
        )}
      </div>
    </div>
  );
};
