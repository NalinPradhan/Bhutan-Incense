import React from "react";
import Image from "next/image";

const Location = () => {
  return (
    <section id="s6">
      <div id="Location" className="mt-40">
        <div className="md:ml-32 ml-4 mr-4  ">
          <h2 className=" md:text-[48px] text-[32px] z-10   font-[family-name:var(--font-cormorant)]">
            Location{" "}
          </h2>
          <div className="flex md:flex-row flex-col gap-10  mt-4">
            <div className="w-[400px] md:ml-10">
              <p className="text-[#716B6B]  text-sm leading-6 tracking-[0.64px] mt-4 font-[family-name:var(--font-roboto)]">
                In{" "}
                <span className="text-black m-2 text-2xl font-[family-name:var(--font-cormorant)] bg-yellow-200 font">
                  Gelephu
                </span>
                , at Bhutan’s southern foothills, our incense is crafted where
                forests breathe and rivers flow. Every stick carries the purity
                and peace of this sacred land.
              </p>
            </div>
            <div className="flex md:justify-end justify-center md:items-end">
              <Image
                alt="gelephu"
                src="/decorative elements/Gelephu.jpg"
                quality={100}
                width={736}
                height={414}
                className="w-full justify-center items-center max-w-full h-[210px] md:h-[344px] md:w-[636px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
