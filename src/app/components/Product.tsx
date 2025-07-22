import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="relative inline-block w-full max-w-[200px] sm:max-w-[200px] max-sm:max-w-[60px]">
      <span className="relative z-10 block">
        <Image
          width={200}
          height={470}
          alt="product"
          src="/decorative elements/INCENSE.png"
          className="w-full h-auto max-sm:max-w-[90px]"
        />
      </span>
      <Image
        width={1480}
        height={672}
        alt="product shadow"
        src="/decorative elements/shadow2.png"
        className="absolute z-0 left-[-100%] md:bottom-[-70px] w-[280%] max-w-none"
      />
    </div>
  );
};

export default Product;
