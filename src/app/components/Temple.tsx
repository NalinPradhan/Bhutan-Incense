"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Making = () => {
  const centerTextRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Fade & scale in (fast, scrub reversible)
      gsap.fromTo(
        centerTextRef.current,
        { opacity: 0, scale: 1 },
        {
          opacity: 1,
          scale: 1.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "+=100", // extend the scroll range
            scrub: true,
          },
        }
      );

      // Fade out (also reversible on scroll up)
      gsap.to(centerTextRef.current, {
        opacity: 0,
        scale: 0.95, // shrink slightly while fading out
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "bottom center",
          end: "bottom top",
          scrub: true,
        },
      });

      // Pin during the white space
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top center",
        endTrigger: ".image-block",
        end: "top center",
        pin: centerTextRef.current,
        pinSpacing: false,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="s5" className="mt-[400px] relative">
      {/* Centered Text */}
      <div
        ref={centerTextRef}
        className="justify-center font-[family-name:var(--font-cormorant)] text-center text-[26px]  md:text-[42px] text-black"
      >
        <h1>To fill the empty space</h1>
        <p>with life as..</p>
      </div>

      {/* Bottom Image */}
      <div className="flex justify-center items-center md:mt-[400px] mt-[400px] image-block relative z-30">
        <div className="relative md:w-full w-full md:h-[785px] h-[210px]">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
          <Image
            alt="khorlo"
            src="/decorative elements/lgimage2.png"
            quality={100}
            width={404}
            height={404}
            className="w-full max-w-full h-[210px] md:h-[785px] md:w-full"
          />
        </div>
        <div className="absolute font-[family-name:var(--font-cormorant)] flex items-center justify-center text-white z-40">
          <div className="text-center text-[26px] md:text-[48px]">
            <h1>peace isn&apos;t a place</h1>
            <p>it&apos;s a practice. A breath. A ritual.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Making;
