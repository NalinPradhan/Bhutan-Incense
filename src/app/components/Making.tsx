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
    </section>
  );
};

export default Making;
