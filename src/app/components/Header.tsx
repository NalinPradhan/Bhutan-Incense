// app/components/Header.tsx
import React from "react";

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  return (
    <section id="s1" className="header md:ml-40 md:mt-36 ">
      <header className={`px-4  md:px-8 lg:px-12  ${className}`}>
        <div className="max-w-7xl mx-auto ">
          <h1 className="text-[24px] font-medium md:text-[48px] md:leading-12 leading-6  lg:text-[48px] font-[family-name:var(--font-cormorant)]">
            BHUTAN
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-600 bg-clip-text text-transparent">
              INCENSE
            </span>
          </h1>
        </div>
      </header>
    </section>
  );
}
