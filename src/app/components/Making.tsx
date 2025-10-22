"use client";
import React from "react";
import Image from "next/image";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

import animationData from "@/assets/anime.json";
import { useInView } from "react-intersection-observer";
import { useRef, useState, useEffect } from "react";

const Making = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    if (lottieRef.current && inView && !hasPlayed) {
      lottieRef.current.play();
      setHasPlayed(true);
    }
  }, [inView, hasPlayed]);

  // Ensure video plays on mount and handles autoplay restrictions
  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Reset video to start
          videoRef.current.currentTime = 0;

          // Attempt to play
          await videoRef.current.play();
        } catch (error) {
          console.log(
            "Autoplay prevented, will retry on user interaction:",
            error
          );

          // Fallback: play on any user interaction
          const playOnInteraction = async () => {
            try {
              await videoRef.current?.play();
              // Remove listeners once played successfully
              document.removeEventListener("click", playOnInteraction);
              document.removeEventListener("touchstart", playOnInteraction);
              document.removeEventListener("scroll", playOnInteraction);
            } catch (err) {
              console.log("Play failed:", err);
            }
          };

          document.addEventListener("click", playOnInteraction, { once: true });
          document.addEventListener("touchstart", playOnInteraction, {
            once: true,
          });
          document.addEventListener("scroll", playOnInteraction, {
            once: true,
          });
        }
      }
    };

    playVideo();

    // Ensure video continues to loop if it stops
    const handleEnded = () => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((err) => console.log("Loop play failed:", err));
      }
    };

    const video = videoRef.current;
    video?.addEventListener("ended", handleEnded);

    return () => {
      video?.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section id="s5">
      <div className="flex md:mt-[400px] justify-center md:justify-end">
        <Image
          alt="khorlo"
          src="/decorative elements/lgimage1.png"
          quality={100}
          width={404}
          height={404}
          className="md:w-[929px] mb-16 md:h-[680px] w-[359px] h-[210px]"
        />
      </div>
      <div
        id="How to use"
        className="flex mt-[200px] md:mt-[400px] justify-center md:justify-center"
      >
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dlyxpzd0s/video/upload/v1754726987/StorySaver.to_AQNicJZs7Kd-70IYoJQMZFypmXtpFlJkTcHqQTp1JodK29BwMF8vdlR0Ku44Aw3u4RMT1FVt8sYQH9ICWAf_U9OoycEmgEOOZvimlXw_yvh8so.mp4"
          width={220}
          height={780}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="max-w-full h-auto"
        />
      </div>
      <div ref={ref} className="flex justify-center">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          className="w-80"
        />
      </div>
    </section>
  );
};

export default Making;
