import type { Metadata } from "next";
import { Geologica, Roboto, Cormorant_Upright } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhutan Incense",
  description: "A product showcase for Bhutan Incense",
};
const geologica = Geologica({
  subsets: ["latin"],
  weight: ["600"], // Semi-bold
  variable: "--font-geologica",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const cormorantUpright = Cormorant_Upright({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`scroll-smooth ${geologica.variable} ${roboto.variable}  ${cormorantUpright.variable}`}
      suppressHydrationWarning={true}
      lang="en"
    >
      <body className=" bg-[#FCFCFC] " suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
