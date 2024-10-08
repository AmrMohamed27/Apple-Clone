import React from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { animateWithGsap } from "../utils/animations";
gsap.registerPlugin(ScrollTrigger);

function Gaming() {
  useGSAP(() => {
    gsap.fromTo(
      "#chip",
      {
        opacity: 0,
        scale: 1.5,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#chip",
          start: "top bottom", // When the top of the element hits the bottom of the viewport
          end: "bottom top", // When the bottom of the element hits the top of the viewport
          toggleActions: "play none none none", // Defines actions on enter, leave, enter back, leave back
        },
      },
    );
    gsap.fromTo(
      "#animated-p",
      {
        opacity: 0,
        y: 250,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#animated-p",
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      },
    );
  }, []);
  return (
    <div className="flex-center mt-12 flex-col gap-12 md:mx-auto md:w-[75%]">
      {/* Chip Image */}
      <div id="chip" className="mb-12">
        <img src={chipImg} alt="chip" width="180" height="auto" />
      </div>
      {/* Headers */}
      <div className="flex-center flex-col gap-12">
        <div className="flex-center flex-col gap-2">
          <h2 className="text-5xl font-semibold text-white md:text-7xl">
            A17 Pro Chip.
          </h2>
          <h2 className="text-center text-5xl font-semibold text-white md:text-7xl">
            A monster win for gaming.
          </h2>
        </div>
        <p className="text-center text-2xl font-semibold text-theme-gray">
          It's here. The biggest redesign in the history of Apple GPUs.
        </p>
      </div>
      {/* Frame Video */}
      <div className="flex-center flex-col gap-4">
        <div className="flex-center relative w-full">
          <img src={frameImg} alt="frame" className="z-10 w-full" />
          <video
            autoPlay
            muted
            playsInline
            className="hiw-video pointer-events-none object-cover"
          >
            <source src={frameVideo} type="video/mp4" />
          </video>
        </div>
        <div>
          <p className="text-md font-semibold text-theme-gray">
            Honkai: Star Rail
          </p>
        </div>
      </div>
      {/* Animated Paragraphs */}
      <div className="grid grid-cols-1 gap-24 md:grid-cols-2" id="animated-p">
        <div className="flex flex-col gap-6">
          <p className="text-xl font-semibold text-theme-gray">
            A17 Pro is an entirely new class of iPhone chip that delivers our
            <span className="text-white">
              {" "}
              best graphics performance by far
            </span>
            .
          </p>
          <p className="text-xl font-semibold text-theme-gray">
            Mobile games{" "}
            <span className="text-white">will look and feel so immersive</span>,
            with incredibly detailed environments and more realistic characters.
            And with industry-leading speed and efficiency, A17 Pro takes fast
            and runs with it.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="text-xl font-semibold text-theme-gray">New</p>
          <span className="text-3xl font-semibold text-white md:text-5xl">
            Pro-class GPU
          </span>
          <p className="text-xl font-semibold text-theme-gray">with 6 cores</p>
        </div>
      </div>
      {/* Footing Paragraph */}
      <div className="mt-24 flex w-full flex-col items-start">
        <p className="text-sm font-semibold text-theme-gray">
          More ways to shop:{" "}
          <span className="text-blue underline">Find and Apple Store </span> or{" "}
          <span className="text-blue underline">other retailer </span> near you.
        </p>
        <p className="text-sm font-semibold text-theme-gray">
          Or call 0000800-040-1966
        </p>
      </div>
    </div>
  );
}

export default Gaming;
