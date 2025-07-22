"use client";
import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const menuItems = [
  { label: "Home" },
  { label: "About" },
  { label: "Services" },
  { label: "Portfolio" },
  { label: "Contact" },
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const menuScreenRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Set initial Y position for menu items
  useGSAP(() => {
    if (itemRefs.current) {
      gsap.set(itemRefs.current, { y: 100, opacity: 0 });
    }
  });

  // Handle menu animation based on open state
  useGSAP(() => {
    if (open) {
      // Show menu screen
      if (menuScreenRef.current) {
        menuScreenRef.current.classList.add("active");
      }
      // Animate menu items in
      gsap.to(itemRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.1,
      });
    } else {
      // Animate menu items out
      gsap.to(itemRefs.current, {
        opacity: 0,
        y: 100,
        duration: 0.3,
        ease: "power2.in",
        stagger: {
          each: 0.08,
          from: "end",
        },
        onComplete: () => {
          // Hide menu screen after animation
          if (menuScreenRef.current) {
            menuScreenRef.current.classList.remove("active");
            gsap.set(itemRefs.current, { y: 100 });
          }
        },
      });
    }
  }, [open]);

  return (
    <section className="navbar h-24">
      <nav className="w-full px-6 py-4 flex justify-between items-center bg-transparent  fixed top-0 left-0 z-10">
        {/* Logo and other nav content can go here */}
        <div className="flex-1"></div>
        {/* Menu toggle button, always at top-right */}
        <button
          className="fixed top-16 right-8 text-3xl cursor-pointer select-none z-30 transition-colors duration-300 p-2 "
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block transition-transform duration-300 ${
              open ? "scale-0  opacity-0" : "scale-100 opacity-100"
            }`}
          >
            {/* Hamburger icon from public folder */}
            <Image
              src="/hamburger.svg"
              alt="Open menu"
              width={16}
              height={16}
            />
          </span>
          <span
            className={`block transition-transform duration-300 absolute inset-0 ${
              open ? "scale-100 opacity-100" : "scale-0  opacity-0"
            }`}
          >
            <Image src="/close.svg" alt="Close menu" width={16} height={16} />
          </span>
        </button>
        {/* Overlay menu */}
        <div
          ref={menuScreenRef}
          className={`menu-screen fixed top-0 left-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center transition-opacity duration-400 z-20 ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <ul className="list-none">
            {menuItems.map((item, idx) => (
              <div
                className="item-wrapper overflow-hidden h-9 my-4"
                key={item.label}
              >
                <li
                  ref={(el) => {
                    itemRefs.current[idx] = el;
                  }}
                  className={`menu-item font-[family-name:var(--font-roboto)] text-base text-gray-600 hover:text-gray-900 transition-colors cursor-pointer ${""}`}
                  style={{
                    transform: "translateY(100%)",
                    opacity: 0,
                    display: "inline-block",
                  }}
                >
                  {item.label}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
