"use client";
import React, { useRef, useState, useEffect } from "react";
import Product from "./Product";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const washi = useRef<HTMLImageElement>(null);
  useGSAP(() => {
    if (isVisible) {
      gsap.fromTo(
        washi.current,
        {
          rotate: 0,
          opacity: 0,
        },
        {
          rotate: 32,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top 20%",
            scrub: true,
            markers: true,
          },
        }
      );
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the element is visible
        rootMargin: "50px 0px -50px 0px", // Start animation slightly before element is fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="s2" ref={sectionRef}>
      <main className="px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Main content */}
            <div className="space-y-6 w-full md:ml-40">
              <h2 className="text-xl md:text-[32px] font-[family-name:var(--font-cormorant)]">
                Light, Breathe, Awaken.
              </h2>
              <div className="text-sm leading-6 tracking-[0.64px]">
                <p className="text-[#716B6B] pl-10 font-[family-name:var(--font-roboto)]">
                  Crafted for sanctifying your space.
                </p>
                <p className="text-[#716B6B] mt-6 pl-10 md:w-85 font-[family-name:var(--font-roboto)]">
                  This incense powder has been manufactured using age-old
                  indigenous medical ingredients and other aromatic herbs and
                  spices. These herbs and spices are valued as a religious
                  offering and its fresh soothing fragrance helps all living
                  beings to overcome stress, many forms of sickness and is good
                  for meditation.
                </p>
                <p className="text-[#ACA7A7] text-xs  font-extralight mt-6 pl-10 md:w-85 font-[family-name:var(--font-roboto)]">
                  Kuengacholing Incense Powder is 100% natural, handmade, and
                  free from chemicals or artificial fragrances.
                </p>
              </div>
            </div>
            {/* Right: Product image */}
            <div className="flex justify-center relative">
              <Image
                alt="washi"
                src="/decorative elements/product bg.png"
                width={601}
                height={574}
                ref={washi}
                className={`absolute w-full h-auto max-w-[501px] max-h-[474px] max-sm:max-w-[300px] max-sm:max-h-[300px] -z-10 transition-all duration-1000 ease-in-out transform ${
                  isVisible ? "opacity-100 rotate-12" : "opacity-0 rotate-0"
                }`}
              />
              <span
                className={`relative top-20 scale-145 will-change-transform transition-all duration-1000 ease-in-out transform ${
                  isVisible
                    ? "opacity-100 -translate-y-8"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Product />
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Intro;
