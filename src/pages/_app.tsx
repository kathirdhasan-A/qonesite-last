import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const myCustomFont = localFont({
  src: [
    {
      path: "../../public/fonts/Lovelo-Black.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Lovelo-Black.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--lovelo-black",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div
        className={`sticky top-0 back z-1000 pb-3 lg:pb-10 ${myCustomFont.variable}`}
      >
        <Navbar />
      </div>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
