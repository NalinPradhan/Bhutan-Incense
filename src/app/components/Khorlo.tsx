// Khorlo.tsx
"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap"; // Make sure to uncomment these imports
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Make sure to uncomment these imports
// import { ScrollSmoother } from "gsap/ScrollSmoother"; // Not strictly needed for just rotation, but keep if you're using it elsewhere
// import { useGSAP } from "@gsap/react"; // useGSAP is useful but not strictly necessary for this simple setup

gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

const Khorlo = () => {
  const khorloRef = useRef<HTMLImageElement>(null); // Renamed for clarity
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the overflow-hidden container

  useEffect(() => {
    if (khorloRef.current && containerRef.current) {
      gsap.to(khorloRef.current, {
        rotation: 120, // Rotate a full circle
        ease: "circ.inOut", // Linear rotation
        scrollTrigger: {
          trigger: containerRef.current, // Trigger when the container is in view
          start: "top bottom", // Animation starts when the top of the container hits the bottom of the viewport
          end: "bottom top", // Animation ends when the bottom of the container hits the top of the viewport
          scrub: true, // Smoothly scrub through the animation based on scroll position
          // markers: true, // Uncomment for debugging ScrollTrigger
        },
      });
    }

    // Clean up ScrollTrigger instances on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      {" "}
      {/* Added overflow-hidden here for the section to catch anything */}
      <div className="relative  w-full text-sm leading-6 tracking-[0.64px] ">
        <Image
          alt="blur background"
          src="/decorative elements/blur bg.png"
          width={250}
          height={250}
          className="md:h-[450] -z-10 right-0 absolute"
        />
        <div className="absolute md:right-44 md:top-36 top-36 ml-4">
          <p className="text-[#716B6B] pl-10 z-10   font-[family-name:var(--font-roboto)] w-[270]">
            Each gentle wisp of <br /> smoke invites you inward{" "}
          </p>
          <p className="text-[#716B6B] pl-10  font-[family-name:var(--font-roboto)]">
            -to stillness, clarity, and presence.
          </p>
        </div>

        {/* This is the key container for the khorlo image */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] flex justify-end items-center overflow-hidden" // Adjust height as needed to give scroll space
        >
          {/* This div positions the image such that its right edge aligns with the container's right,
              and then pulls it left by half its width. */}
          <div
            className="absolute  right-0 top-1/2 -translate-y-1/2"
            style={{ marginRight: "-202px" }}
          >
            <Image
              ref={khorloRef}
              alt="khorlo"
              src="/decorative elements/vwana.png"
              width={404} // Your image width
              height={404} // Your image height
              // Removed original classes like mix-blend-exclusion, -right-36 etc. as they interfere with new positioning
              // Added transform-origin-center for consistent rotation
              className="block  mix-blend-exclusion" // Use transform-gpu for hardware acceleration
              style={{
                transformOrigin: "center center",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Khorlo;
