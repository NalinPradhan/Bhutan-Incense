// app/components/Header.tsx
"use client";
import React from "react";
import Image from "next/image";
import { useRef } from "react";
interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const leaf1 = useRef<HTMLImageElement>(null);
  return (
    <section id="s1" className="header md:ml-20 md:mt-36 ">
      <header className={`px-4  md:px-8 lg:px-12  ${className}`}>
        <div className="max-w-7xl mx-auto ">
          <Image
            alt="flower"
            src="/decorative elements/leaf1.png"
            ref={leaf1}
            quality={100}
            width={60}
            height={60}
            style={{
              transformOrigin: "center center",
            }}
            className="md:w-[60px] w-[30px] md:top-[228px] top-[89px] left-[115px] md:left-[400px] absolute -z-10"
          />
          <h1 className="text-[24px] font-medium md:text-[48px] md:leading-12 leading-6  lg:text-[48px] font-[family-name:var(--font-cormorant)]">
            KUENGACHOLING
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
