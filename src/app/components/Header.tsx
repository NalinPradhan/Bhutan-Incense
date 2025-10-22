// app/components/Header.tsx
"use client";
import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface HeaderProps {
  className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const leaf1 = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Set initial state immediately
    gsap.set(headerRef.current, {
      opacity: 0,
      y: 30,
    });

    gsap.set(leaf1.current, {
      opacity: 0,
      y: 100, // Start from bottom
    });

    // Animate header in
    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out",
      delay: 0.2,
    });

    // Animate leaf sliding from bottom
    gsap.to(leaf1.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.5,
    });

    // Parallax effect on scroll
    gsap.to(leaf1.current, {
      y: -80,
      rotation: 15,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.5,
      },
    });
  }, []);

  return (
    <section id="s1" className="header md:ml-20 md:mt-36" ref={sectionRef}>
      <header className={`px-4 md:px-8 lg:px-12 ${className}`}>
        <div className="max-w-7xl mx-auto">
          <Image
            alt="flower"
            src="/decorative elements/leaf1.png"
            ref={leaf1}
            quality={100}
            width={60}
            height={60}
            style={{
              transformOrigin: "center center",
              opacity: 0,
            }}
            className="md:w-[60px] w-[30px] md:top-[228px] top-[89px] left-[115px] md:left-[400px] absolute -z-10"
          />
          <h1
            ref={headerRef}
            className="text-[24px] font-medium md:text-[48px] md:leading-12 leading-6 lg:text-[48px] font-[family-name:var(--font-cormorant)]"
            style={{ opacity: 0 }}
          >
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
