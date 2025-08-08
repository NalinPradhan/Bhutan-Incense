"use client";
import Image from "next/image";
// import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const Ingredients = () => {
  const para = useRef<HTMLDivElement>(null);
  const para1 = useRef<HTMLDivElement>(null);
  const para2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    [para, para1, para2].forEach((ref) => {
      if (para.current) {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 1 * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  });
  return (
    <section id="s4" className="mt-40">
      <div>
        <div className="relative">
          <Image
            alt="flower"
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
        <div className="md:ml-32 ml-4 w-full max-w-[400px] md:max-w-[570px] ">
          <h2 className=" md:text-[48px] text-[32px] z-10   font-[family-name:var(--font-cormorant)]">
            Crafted from the purest of <span className="text-white ">ing</span>
            redients
          </h2>
          <div className="md:w-[450px] w-[300px] md:ml-10 ml-6 p-4">
            <p
              ref={para}
              className="text-[#716B6B] text-sm leading-6 tracking-[0.64px] mt-4 font-[family-name:var(--font-roboto)]"
            >
              How do you transform nature’s stillness into sacred smoke? With
              time-honored ingredients drawn from the earth, gathered in
              harmony, and chosen for their power to calm, purify, and awaken.
            </p>
          </div>

          <Image
            alt="washi"
            src="/decorative elements/blur bg left.png"
            width={200}
            height={200}
            quality={100}
            className="-left-15 mt-56 absolute"
          />
        </div>
        <div className="flex flex-col md:flex-row md:ml-44  ml-20">
          <div className="rounded-full md:mr-[286px] md:w-[180px] w-[120px] mt-[44px] ">
            <Image
              alt="ingredients"
              src="/decorative elements/flower ingre.png"
              quality={100}
              width={180}
              height={180}
            />
            <Image
              alt="flower"
              src="/decorative elements/purple star.png"
              quality={100}
              width={20}
              height={20}
              style={{
                transformOrigin: "center center",
              }}
              className="mt-8"
            />
            <h3 className="font-semibold mt-2 font-[family-name:var(--font-roboto)]">
              Poppy Flower
            </h3>
            <p
              ref={para1}
              className="text-[#716B6B] w-[280px] text-sm leading-6 tracking-[0.64px] mt-4 font-[family-name:var(--font-roboto)]"
            >
              The poppy flower, once offered in quiet rituals across Himalayan
              temples, adds a whisper of floral softness to our incense. It’s
              not loud, but deeply felt—an herb that gently draws you inward.
            </p>
          </div>

          <div className="rounded-full md:mr-[286px] md:w-[180px] w-[120px] mt-[44px]">
            <Image
              alt="ingredients"
              src="/decorative elements/ingre2.png"
              quality={100}
              width={180}
              height={180}
            />
            <Image
              alt="flower"
              src="/decorative elements/yellow star(ingredients).png"
              quality={100}
              width={20}
              height={20}
              style={{
                transformOrigin: "center center",
              }}
              className="mt-8"
            />
            <h3 className="font-semibold mt-2 font-[family-name:var(--font-roboto)]">
              Tree Bark
            </h3>
            <p
              ref={para2}
              className="text-[#716B6B] w-[280px] text-sm leading-6 tracking-[0.64px] mt-4 font-[family-name:var(--font-roboto)]"
            >
              Sourced from the towering pines of Bhutan’s forests, this bark
              carries the essence of deep earth and fresh air. Used for
              centuries in monastic incense, it brings a resinous, grounding
              aroma that connects sky to soil.{" "}
            </p>
          </div>
        </div>
        <div className="h-60"></div>
      </div>
    </section>
  );
};

export default Ingredients;
