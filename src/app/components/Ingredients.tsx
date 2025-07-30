import Image from "next/image";
import React from "react";
// import Image from "next/image";
// import React, { useRef, useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

const Ingredients = () => {
  return (
    <section id="s4" className="mt-40">
      <div>
        <div className="relative">
          <Image
            alt="khorlo"
            src="/decorative elements/purple flower.png"
            quality={100}
            width={239}
            height={236}
            style={{
              transformOrigin: "center center",
            }}
            className="md:w-[200px] w-[100px] absolute -z-10"
          />
        </div>
        <div className="md:ml-32 ml-12 md:w-[570px] ">
          <h2 className=" md:text-[48px] text-[32px] z-10   font-[family-name:var(--font-cormorant)]">
            Crafted from the purest of <span className="text-white">ing</span>
            redients
          </h2>
        </div>
        <div className="h-60"></div>
      </div>
    </section>
  );
};

export default Ingredients;
