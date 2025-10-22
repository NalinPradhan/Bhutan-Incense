"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Making = () => {
  const centerTextRef = useRef<HTMLDivElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageBlockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Set initial state
    gsap.set(centerTextRef.current, {
      opacity: 0,
      scale: 1,
      y: 0,
    });

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom top",
          scrub: 1.5,
          pin: centerTextRef.current,
          pinSpacing: false,
        },
      });

      // Fade in and scale
      tl.to(centerTextRef.current, {
        opacity: 1,
        scale: 1.15,
        duration: 0.2,
      })
        // Hold
        .to(centerTextRef.current, {
          opacity: 1,
          scale: 1.15,
          duration: 0.3,
        })
        // Move down and stay there (remains visible but behind image)
        .to(centerTextRef.current, {
          y: 150,
          scale: 0.95,
          duration: 0.5,
        })
        // Keep it in final position for rest of scroll
        .to(centerTextRef.current, {
          y: 150,
          scale: 0.95,
          duration: 0.5,
        });
    }, sectionRef.current ?? undefined);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="s5"
      className="mt-[400px] relative overflow-hidden"
    >
      {/* Centered Text - Lower z-index so it goes behind image */}
      <div
        ref={centerTextRef}
        className="justify-center font-[family-name:var(--font-cormorant)] text-center text-[26px] md:text-[42px] text-black relative z-10"
        style={{ opacity: 0 }}
      >
        <h1>To fill the empty space</h1>
        <p>with life as..</p>
      </div>

      {/* Bottom Image - Higher z-index */}
      <div
        ref={imageBlockRef}
        className="flex justify-center items-center md:mt-[400px] mt-[400px] image-block relative z-30"
      >
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
