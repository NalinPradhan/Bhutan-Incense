"use client";
import React, { useRef } from "react";
import Product from "./Product";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Intro = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const washi = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const para1 = useRef<HTMLParagraphElement>(null);
  const para2 = useRef<HTMLParagraphElement>(null);
  const para3 = useRef<HTMLParagraphElement>(null);
  const para4 = useRef<HTMLParagraphElement>(null);

  // Refs for decorative elements
  const flower = useRef<HTMLImageElement>(null);
  const leaf2 = useRef<HTMLImageElement>(null);
  const leaf3 = useRef<HTMLImageElement>(null);
  const leaf4 = useRef<HTMLImageElement>(null);
  const star = useRef<HTMLImageElement>(null);
  const honey = useRef<HTMLImageElement>(null);
  const honey2 = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      // Set initial states IMMEDIATELY to prevent flash
      gsap.set([para1.current, para2.current, para3.current, para4.current], {
        opacity: 0,
        y: 20,
      });

      gsap.set(washi.current, {
        opacity: 0,
        rotation: 0,
      });

      // Set initial states for decorative elements
      gsap.set(
        [
          flower.current,
          leaf2.current,
          leaf3.current,
          leaf4.current,
          star.current,
          honey.current,
          honey2.current,
        ],
        {
          opacity: 0,
          y: 80,
        }
      );

      // Animate decorative elements sliding in from bottom
      const decorativeElements = [
        { ref: flower.current, delay: 0.2 },
        { ref: leaf2.current, delay: 0.3 },
        { ref: leaf3.current, delay: 0.4 },
        { ref: leaf4.current, delay: 0.5 },
        { ref: star.current, delay: 0.35 },
        { ref: honey.current, delay: 0.45 },
        { ref: honey2.current, delay: 0.55 },
      ];

      decorativeElements.forEach(({ ref, delay }) => {
        gsap.to(ref, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Parallax effects for each decorative element
      gsap.to(flower.current, {
        y: -60,
        rotation: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      gsap.to(leaf2.current, {
        y: -40,
        x: 20,
        rotation: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      gsap.to(leaf3.current, {
        y: -70,
        x: -15,
        rotation: 25,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.8,
        },
      });

      gsap.to(leaf4.current, {
        y: -50,
        x: 10,
        rotation: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 2.2,
        },
      });

      gsap.to(star.current, {
        y: -80,
        rotation: 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      gsap.to(honey.current, {
        y: -55,
        x: -10,
        rotation: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.6,
        },
      });

      gsap.to(honey2.current, {
        y: -65,
        x: 15,
        rotation: -12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.4,
        },
      });

      // Washi fade in and rotate
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
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
            once: false, // Allow reverse on scroll up
          },
        }
      );

      // Continue rotation on scroll
      gsap.to(washi.current, {
        rotation: 44,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });

      // Animate paragraphs
      [para1, para2, para3, para4].forEach((ref, idx) => {
        if (ref.current) {
          gsap.to(ref.current, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: idx * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section id="s2" className="md:mb-36" ref={sectionRef}>
      <div className="px-4 md:px-8 lg:px-12 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 w-full pr-15 md:ml-20">
              <Image
                ref={flower}
                alt="flower"
                src="/decorative elements/flower.png"
                quality={100}
                width={60}
                height={60}
                style={{
                  transformOrigin: "center center",
                  opacity: 0,
                }}
                className="md:w-[80px] w-[60px] md:top-[238px] md:left-[530px] left-[215px] top-[120px] absolute"
              />
              <Image
                ref={leaf2}
                alt="leaf2"
                src="/decorative elements/leaf2.png"
                quality={100}
                width={60}
                height={60}
                style={{ transformOrigin: "center center", opacity: 0 }}
                className="md:w-[30px] w-[20px] md:top-[398px] top-[200px] left-[25px] md:left-[100px] absolute -z-10"
              />
              <Image
                ref={leaf3}
                alt="leaf3"
                src="/decorative elements/leaf3.png"
                quality={100}
                width={60}
                height={60}
                style={{ transformOrigin: "center center", opacity: 0 }}
                className="rotate-90 md:w-[30px] w-[15px] md:top-[738px] top-[650px] left-[385px] md:left-[200px] absolute z-10"
              />
              <Image
                ref={leaf4}
                alt="leaf4"
                src="/decorative elements/leaf4.png"
                quality={100}
                width={60}
                height={60}
                style={{ transformOrigin: "center center", opacity: 0 }}
                className="md:w-[20px] w-[20px] md:top-[638px] top-[550px] left-[55px] md:left-[645px] absolute -z-10"
              />
              <Image
                ref={star}
                alt="star"
                src="/decorative elements/star 1.png"
                quality={100}
                width={60}
                height={60}
                style={{ transformOrigin: "center center", opacity: 0 }}
                className="md:w-[15px] w-[12px] md:top-[338px] md:left-[605px] top-[590px] left-[280px] absolute"
              />
              <Image
                ref={honey}
                alt="honey"
                src="/decorative elements/honey.png"
                quality={100}
                width={60}
                height={60}
                style={{ transformOrigin: "center center", opacity: 0 }}
                className="md:w-[25px] w-[20px] md:top-[388px] md:left-[688px] top-[650px] left-[125px] absolute"
              />
              <Image
                ref={honey2}
                alt="honey2"
                src="/decorative elements/honey2.png"
                quality={100}
                width={60}
                height={60}
                style={{ transformOrigin: "center center", opacity: 0 }}
                className="md:w-[32px] w-[32px] md:top-[538px] md:left-[515px] top-[750px] left-[305px] absolute"
              />
              <h2
                ref={para1}
                className="text-xl md:text-[32px] font-[family-name:var(--font-cormorant)]"
                style={{ opacity: 0 }}
              >
                Light, Breathe, Awaken.
              </h2>
              <div className="text-sm leading-6 tracking-[0.64px]">
                <p
                  ref={para2}
                  className="text-[#565151] pl-10 font-[family-name:var(--font-roboto)]"
                  style={{ opacity: 0 }}
                >
                  Crafted for sanctifying your space.
                </p>
                <p
                  ref={para3}
                  className="text-[#565151] mt-6 pl-10 md:w-85 font-[family-name:var(--font-roboto)]"
                  style={{ opacity: 0 }}
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
                  className="text-[#ACA7A7] text-xs font-extralight mt-6 pl-10 md:w-85 font-[family-name:var(--font-roboto)]"
                  style={{ opacity: 0 }}
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
                className="absolute md:top-7 top-36 w-full h-auto max-w-[701px] max-h-[674px] max-sm:max-w-[300px] max-sm:max-h-[300px] -z-10"
                style={{ opacity: 0 }}
              />
              <span className="relative top-50 md:top-34 scale-145 md:scale-160">
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
        className="top-100"
      />
      <Image
        alt="blur background"
        src="/decorative elements/blur bg.png"
        width={250}
        height={250}
        quality={100}
        className="md:h-[450] z-30 -right-0 hidden md:block absolute top-[50em]"
      />
    </section>
  );
};

export default Intro;
