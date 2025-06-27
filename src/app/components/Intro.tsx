import React from "react";

const Intro = () => {
  return (
    <main className="px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Your main content */}
          <div className="space-y-6 w-full md:ml-40">
            <h2 className=" text-xl md:text-[32px] font-[family-name:var(--font-cormorant)]">
              Light, Breathe, Awaken.
            </h2>
            <div className="text-sm leading-6 tracking-[0.64px]">
              <p className="text-[#716B6B] pl-10 font-[family-name:var(--font-roboto)]">
                Crafted for sanctifying your space.
              </p>
              <p className="text-[#716B6B] mt-6 pl-10 md:w-85   font-[family-name:var(--font-roboto)]">
                This incense powder has been manufactured using age-old
                indigenous medical ingredients and other aromatic herbs and
                spices. These herbs and spices are valued as a religious
                offering and its fresh soothing fragrance helps all living
                beings to overcome stress, many forms of sickness and is good
                for meditation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
