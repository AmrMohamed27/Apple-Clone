/* eslint-disable tailwindcss/no-custom-classname */
import { rightImg, watchImg } from "../utils/index.js";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VideoCarousel from "./VideoCarousel.jsx";
gsap.registerPlugin(ScrollTrigger);

function Highlights() {
  useGSAP(() => {
    gsap.fromTo(
      ".animated",
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".animated",
          start: "top bottom", // When the top of the element hits the bottom of the viewport
          end: "bottom top", // When the bottom of the element hits the top of the viewport
          toggleActions: "play reverse play reverse", // Defines actions on enter, leave, enter back, leave back
        },
        stagger: 0.1,
      },
    );
  });
  return (
    <div className="scrim-max-width h-full">
      <div className="flex flex-row items-end justify-between">
        <h2 className="animated text-3xl font-semibold text-theme-gray sm:text-4xl md:text-6xl">
          Get the highlights.
        </h2>
        <div className="flex flex-row items-end justify-end gap-4">
          <div className="flex-center animated flex-row gap-2">
            <p className="text-md text-blue md:text-xl">Watch the film</p>
            <img src={watchImg} alt="Watch the film" width="24" height="auto" />
          </div>
          <div className="flex-center animated flex-row gap-2">
            <p className="text-md text-blue md:text-xl">Watch the event</p>
            <img src={rightImg} alt="Watch the event" width="8" height="auto" />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <VideoCarousel />
      </div>
    </div>
  );
}

export default Highlights;
