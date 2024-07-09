import { heroVideo, smallHeroVideo } from "../utils/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Hero() {
  useGSAP(() => {
    gsap.to("#hero-header", {
      duration: 1,
      delay: 0.6,
      opacity: 1,
    });
    gsap.fromTo(
      "#hero-div",
      {
        y: 250,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: 1,
      },
    );
  }, []);
  return (
    <div className="flex-center h-full flex-col gap-6">
      <div className="flex-center mt-14 h-5/6 w-full flex-col">
        <h2
          id="hero-header"
          className="mb-10 text-3xl font-semibold text-gold opacity-0 max-md:mb-10 md:mb-0"
        >
          iPhone 15 Pro
        </h2>
        <div className="w-9/12 md:w-10/12">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hidden size-full md:block"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="block size-full md:hidden"
          >
            <source src={smallHeroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="hero-div" className="flex-center mb-12 flex-col gap-5">
        <button className="rounded-3xl border border-transparent bg-blue px-5 py-2 hover:border-blue hover:bg-transparent hover:text-blue">
          Buy
        </button>
        <p className="text-xl">From $199/month or $999</p>
      </div>
    </div>
  );
}

export default Hero;
