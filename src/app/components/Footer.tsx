import React from "react";

const Footer = () => {
  return (
    <footer
      id="Contact"
      className="relative mt-60 text-white"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 20%, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.7) 65%, rgba(0,0,0,0.5) 85%, rgba(0,0,0,0.3) 100%),
          url('/decorative elements/footer1.jpg')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Wave shape at the top */}
      <div className="absolute -top-15 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="#000000"
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
          ></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl font-[family-name:var(--font-roboto)] mx-auto px-6 pt-20 pb-10 grid gap-8 md:grid-cols-3 relative z-10">
        <div>
          <h3 className="font-bold text-2xl mb-5 font-[family-name:var(--font-cormorant)]">
            Kuengacholing Incense
          </h3>
          <p>Gelephu, Bhutan</p>
          <p>+975 77414024</p>
          <p className="mt-2">
            <a
              href="mailto:kuengacholingincense@gmail.com
"
              className="underline"
            >
              kuengacholingincense@gmail.com
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Discover our incense</h3>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.kuengacholingincense.com
          </a>
        </div>
        <div>
          <h3 className="font-bold mb-2">Follow us</h3>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://www.instagram.com/kuengacholing_incense?utm_source=ig_web_button_share_sheet&igsh=ZDBudWRuaHk3dXh0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-transform transform hover:scale-110 hover:text-pink-700"
            >
              {/* Instagram SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white hover:text-pink-300"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/782608872137707?ref=_xav_ig_profile_page_web_bt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="transition-transform transform hover:scale-110 hover:text-blue-500"
            >
              {/* Facebook SVG */}
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white hover:text-blue-300"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H5v4h5v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://tiktok.com/@kuengacholingincense"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="transition-transform transform hover:scale-110 hover:text-[#25F4EE]"
            >
              {/* TikTok SVG */}
              {/* <svg
                width="28"
                height="28"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white hover:text-[#25F4EE]"
              >
                <path
                  d="M41.5 17.5c-3.6 0-6.5-2.9-6.5-6.5V7h-6v24.5c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4c.7 0 1.4.2 2 .5v-6.3c-.7-.1-1.3-.2-2-.2-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10v-8.5c2 1.3 4.4 2 7 2v-6z"
                  fill="currentColor"
                />
              </svg> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
