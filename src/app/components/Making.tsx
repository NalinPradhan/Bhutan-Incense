import React from "react";
import Image from "next/image";

const Making = () => {
  return (
    <section id="s5">
      <div className="flex md:mt-[400px] justify-center md:justify-end">
        <Image
          alt="khorlo"
          src="/decorative elements/lgimage1.png"
          quality={100}
          width={404}
          height={404}
          className="md:w-[929px]  mb-16   md:h-[680px] w-[359px] h-[210px]"
        />
      </div>
      <div
        id="How to use"
        className="flex mt-[200px] md:mt-[400px] justify-center md:justify-center"
      >
        <video
          src="https://res.cloudinary.com/dlyxpzd0s/video/upload/v1754726987/StorySaver.to_AQNicJZs7Kd-70IYoJQMZFypmXtpFlJkTcHqQTp1JodK29BwMF8vdlR0Ku44Aw3u4RMT1FVt8sYQH9ICWAf_U9OoycEmgEOOZvimlXw_yvh8so.mp4"
          width={220}
          height={780}
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  );
};

export default Making;
