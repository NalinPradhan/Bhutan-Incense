// Khorlo.tsx
"use client";
import Image from "next/image";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Khorlo = () => {
  const khorloRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const para = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (para.current) {
      gsap.fromTo(
        para.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1 * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: para.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  });

  useEffect(() => {
    if (khorloRef.current && containerRef.current) {
      gsap.to(khorloRef.current, {
        rotation: 120,
        translateY: -50,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section id="s3" className="relative overflow-hidden">
      {" "}
      <div className="relative h-96  w-full text-sm leading-6 tracking-[0.64px] ">
        <div ref={para} className="absolute md:right-44 md:top-36 top-36 ml-4">
          <p className="text-[#716B6B] pl-10 z-10   font-[family-name:var(--font-roboto)] w-[270]">
            Each gentle wisp of <br /> smoke invites you inward{" "}
          </p>
          <p className="text-[#716B6B] pl-10  font-[family-name:var(--font-roboto)]">
            -to stillness, clarity, and presence.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full h-[500px] flex justify-end items-center overflow-hidden"
        >
          <div
            className="absolute  right-0 top-1/2 -translate-y-1/2"
            style={{ marginRight: "-202px" }}
          >
            <Image
              ref={khorloRef}
              alt="khorlo"
              src="/decorative elements/vwana.png"
              quality={100}
              width={404}
              height={404}
              className="block  mix-blend-exclusion"
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
