"use client";
import Image from "next/image";
import React from "react";
import { useRef } from "react";

// -> impored these to animate the khorlo
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";
// import { useGSAP } from "@gsap/react";
// gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const Khorlo = () => {
  const khorlo = useRef<HTMLImageElement>(null);
  return (
    <section className="">
      <div className="relative w-full text-sm leading-6  tracking-[0.64px] ">
        <Image
          alt="blur background"
          src="/decorative elements/blur bg.png"
          width={250}
          height={250}
          className="md:h-[450] -z-10 right-0 absolute"
        />
        {/* <div className="relative w-full  h-screen md:right-40 mt-60 right-20 md:mt-36 overflow-hidden max-w-xs mr-4  order-1  text-sm leading-6 tracking-[0.64px] "> */}
        <p className="text-[#716B6B] pl-10  font-[family-name:var(--font-roboto)] w-[270] ">
          Each gentle wisp of <br></br> smoke invites you inward{" "}
        </p>
        <p className="text-[#716B6B] pl-10 font-[family-name:var(--font-roboto)]">
          -to stillness, clarity, and presence.
        </p>
        <div className="overflow-hidden">
          <Image
            ref={khorlo}
            alt="khorlo"
            src="/decorative elements/vwana.png"
            width={404}
            height={404}
            className="absolute mix-blend-exclusion -right-36 md:-right-40 md:top-6  -z-20 scale-50 md:scale-100 "
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Khorlo;
