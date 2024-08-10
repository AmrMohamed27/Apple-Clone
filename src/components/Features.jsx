import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { animateWithGsap } from "../utils/animations";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const exploreVideoRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      "#top-header",
      {
        y: 250,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: ".animated",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play none none none",
        },
      },
    );
    gsap.fromTo(
      ".bottom-para",
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".bottom-para",

          toggleActions: "restart reverse restart reverse",
        },
      },
    );
    gsap.to("#explore-video", {
      scrollTrigger: {
        trigger: "#explore-video",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        exploreVideoRef.current.play();
      },
    });
    animateWithGsap(
      ".feature-video",
      { opacity: 1, scale: 1, ease: "power1" },
      { scrub: 5.5 },
    );
  }, []);
  return (
    <div className="">
      {/* Header */}
      <div className="scrim-max-width">
        <h2
          id="top-header"
          className="text-3xl font-semibold text-theme-gray sm:text-4xl md:text-6xl"
        >
          Explore the full story.
        </h2>
      </div>
      {/* Secondary Header */}
      <div className="scrim-max-width mt-32 h-full pl-24 pt-12">
        <h3 className="text-5xl font-semibold text-white sm:text-4xl md:text-7xl">
          iPhone.
        </h3>
        <h3 className="text-5xl font-semibold text-white sm:text-4xl md:text-7xl">
          Forged in titanium.
        </h3>
      </div>
      {/* Video and images container */}
      <div className="scrim-max-width mt-24 w-full pl-8 md:w-[80%]">
        <div className="flex h-full w-full flex-col items-start justify-center md:w-[85%]">
          {/* Video */}
          <div className="h-[50vh] md:h-1/2 md:w-[calc(100%-1rem)]">
            <video
              id="explore-video"
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              playsInline
              preload="none"
              ref={exploreVideoRef}
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>
          {/* Images */}
          <div className="flex w-full flex-1 flex-col items-center justify-start gap-4 md:h-1/2 md:flex-row">
            <div className="h-[50vh] w-full overflow-hidden md:w-[calc(50%-1rem)]">
              <img
                className="feature-video w-full"
                src={explore1Img}
                alt="explore1"
              />
            </div>
            <div className="h-[50vh] w-full overflow-hidden md:w-[calc(50%-1rem)]">
              <img
                className="feature-video h-full"
                src={explore2Img}
                alt="explore2"
              />
            </div>
          </div>
          {/* Paragraphs */}
          <div className="mt-12 flex h-1/2 w-full flex-1 flex-col items-center justify-start gap-4 md:mt-24 md:flex-row">
            <div className="relative h-full w-full md:w-[calc(50%-1rem)]">
              <p className="bottom-para text-md font-semibold text-theme-gray md:text-xl">
                iPhone 15 Pro is{" "}
                <span className="text-white">
                  the first iPhone to feature an aerospace-grade titanium
                  design,
                </span>
                using the same alloy that spacecraft use for missions to Mars.
              </p>
            </div>
            <div className="relative h-full w-full md:w-[calc(50%-1rem)]">
              <p className="bottom-para text-md font-semibold text-theme-gray md:text-xl">
                Titanium has one of the best strngth-to-weight ratios of any
                metal, making these our{" "}
                <span className="text-white">lightest Pro models ever</span>.
                You'll notice the difference the moment you pick one up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
