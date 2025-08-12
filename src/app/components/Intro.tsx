"use client";
import React, { useRef, useState, useEffect } from "react";
import Product from "./Product";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP, SplitText);

const Intro = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const washi = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const para1 = useRef<HTMLParagraphElement>(null);
  const para2 = useRef<HTMLParagraphElement>(null);
  const para3 = useRef<HTMLParagraphElement>(null);
  const para4 = useRef<HTMLParagraphElement>(null);
  const flower = useRef<HTMLImageElement>(null);
  useGSAP(
    () => {
      gsap.set(washi.current, {
        opacity: 1,
        rotation: 0,
      });

      if (isVisible) {
        gsap.fromTo(
          washi.current,
          {
            rotate: 0,
            opacity: 0,
          },
          {
            rotate: 82,
            opacity: 1,
            duration: 1,
            ease: "ease.inOut",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "top 20%",
              scrub: true,
            },
          }
        );
      }
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          scrub: 1.5,
        },
        scrub: 1.5,
      });
      tl.to(washi.current, {
        rotation: 44,
        duration: 3,
        ease: "power3.inOut",
      });
      [para1, para2, para3, para4].forEach((ref, idx) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: idx * 0.2,
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
    },
    { scope: containerRef }
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px 0px -50px 0px",
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
    <section id="s2" className="md:mb-36" ref={sectionRef}>
      <div className="px-4 md:px-8 lg:px-12 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 w-full pr-15 md:ml-20">
              <Image
                alt="flower"
                src="/decorative elements/flower.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="md:w-[80px] w-[60px] md:top-[238px] md:left-[530px] left-[215px] top-[120px]   absolute "
              />
              <Image
                alt="flower"
                src="/decorative elements/leaf2.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="md:w-[30px] w-[20px] md:top-[398px] top-[200px] left-[25px] md:left-[100px] absolute -z-10"
              />
              <Image
                alt="flower"
                src="/decorative elements/leaf3.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="rotate-90 md:w-[30px] w-[15px] md:top-[738px] top-[650px] left-[385px] md:left-[200px] absolute z-10"
              />
              <Image
                alt="flower"
                src="/decorative elements/leaf4.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="md:w-[20px] w-[20px] md:top-[638px] top-[550px] left-[55px] md:left-[645px] absolute -z-10"
              />
              <Image
                alt="flower"
                src="/decorative elements/star 1.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="md:w-[15px] w-[12px] md:top-[338px] md:left-[605px] top-[590px] left-[280px]  absolute z-10"
              />
              <Image
                alt="flower"
                src="/decorative elements/honey.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="md:w-[25px] w-[20px] md:top-[388px] md:left-[688px] top-[650px] left-[125px]  absolute z-10"
              />
              <Image
                alt="flower"
                src="/decorative elements/honey2.png"
                ref={flower}
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                }}
                className="md:w-[32px] w-[32px] md:top-[538px] md:left-[515px] top-[750px] left-[305px]  absolute z-10"
              />
              <h2
                ref={para1}
                className=" text-xl md:text-[32px] font-[family-name:var(--font-cormorant)]"
              >
                Light, Breathe, Awaken.
              </h2>
              <div className="text-sm leading-6 tracking-[0.64px]">
                <p
                  ref={para2}
                  className="text-[#565151]  pl-10 font-[family-name:var(--font-roboto)]"
                >
                  Crafted for sanctifying your space.
                </p>
                <p
                  ref={para3}
                  className="text-[#565151] mt-6 pl-10 md:w-85 font-[family-name:var(--font-roboto)]"
                >
                  This incense powder has been manufactured using age-old
                  indigenous medical ingredients and other aromatic herbs and
                  spices. These herbs and spices are valued as a religious
                  offering and its fresh soothing fragrance helps all living
                  beings to overcome stress, many forms of sickness and is good
                  for meditation.
                </p>
                <p
                  ref={para4}
                  className="text-[#ACA7A7] text-xs  font-extralight mt-6 pl-10 md:w-85 font-[family-name:var(--font-roboto)]"
                >
                  Kuengacholing Incense Powder is 100% natural, handmade, and
                  free from chemicals or artificial fragrances.
                </p>
              </div>
            </div>
            <div
              ref={containerRef}
              className="flex justify-center relative sm:mt-10 md:bottom-46 bottom-36"
            >
              <Image
                alt="washi"
                src="/decorative elements/product bg.png"
                width={601}
                height={574}
                ref={washi}
                quality={100}
                className={`absolute  md:top-7 top-36 w-full h-auto max-w-[701px] max-h-[674px] max-sm:max-w-[300px] max-sm:max-h-[300px] -z-10`}
              />
              <span
                className={`relative top-50 md:top-34 scale-145 md:scale-160 `}
              >
                <Product />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="washi"
        src="/decorative elements/blur bg left.png"
        width={200}
        height={200}
        quality={100}
        className="top-100 "
      />
      <Image
        alt="blur background"
        src="/decorative elements/blur bg.png"
        width={250}
        height={250}
        quality={100}
        className="md:h-[450] z-30 -right-0 hidden md:block  absolute top-[50em] "
      />
    </section>
  );
};

export default Intro;
