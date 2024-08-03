import gsap from "gsap";
import { highlightsSlides } from "../constants/index.js";
import { replayImg, playImg, pauseImg } from "../utils/index.js";
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function VideoCarousel() {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });
  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  const [loadedData, setLoadedData] = useState([]);

  useGSAP(() => {
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({ ...prev, startPlay: true, isPlaying: true }));
      },
    });
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
  }, [isEnd, videoId]);

  const handleLoadedData = (i, e) => {
    setLoadedData((prev) => [...prev, e]);
  };
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);
  useEffect(() => {
    let currentProgress = 0;
    // eslint-disable-next-line prefer-const
    let span = videoSpanRef.current;

    if (span[videoId]) {
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 768
                  ? "10vw"
                  : window.innerWidth < 1200
                    ? "10vw"
                    : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: "12px" });
            gsap.to(span[videoId], { backgroundColor: "#AFAFAF" });
          }
        },
      });
      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            highlightsSlides[videoId].videoDuration,
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "video-play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;
      case "video-pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((slide, index) => (
          <div key={slide.id} id="slider" className="pr-10 sm:pr-20">
            <div className="relative h-[35vh] w-[88vw] sm:h-[50vh] sm:w-[70vw] md:h-[70vh]">
              <div className="flex-center size-full overflow-hidden rounded-3xl bg-black">
                <video
                  className={`${slide.id === 2 && "translate-x-44"} pointer-events-none`}
                  muted
                  playsInline
                  preload="auto"
                  id="video"
                  ref={(el) => (videoRef.current[index] = el)}
                  onPlay={() => {
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                      videoId: index,
                    }));
                  }}
                  onEnded={() => {
                    index !== 3
                      ? handleProcess("video-end", index)
                      : handleProcess("video-last");
                  }}
                  onLoadedMetadata={(e) => {
                    handleLoadedData(index, e);
                  }}
                >
                  <source src={slide.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute left-10 top-10 z-10">
                {slide.textLists.map((text, index) => (
                  <p
                    key={index}
                    className="text-xl font-medium text-white md:text-2xl"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-theme-gray-button px-7 py-5 backdrop-blur">
          {videoRef.current.map((_, index) => (
            <span
              key={index}
              ref={(el) => (videoDivRef.current[index] = el)}
              className="relative mx-2 size-3 cursor-pointer rounded-full bg-theme-gray"
            >
              <span
                className="absolute size-full rounded-full bg-theme-gray-icon"
                ref={(el) => (videoSpanRef.current[index] = el)}
              ></span>
            </span>
          ))}
        </div>

        <button className="control-btn bg-theme-gray-button">
          <img
            src={isLastVideo ? replayImg : isPlaying ? pauseImg : playImg}
            alt={isLastVideo ? "replay" : isPlaying ? "pause" : "play"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : isPlaying
                  ? () => handleProcess("video-pause")
                  : () => handleProcess("video-play")
            }
          />
        </button>
      </div>
    </>
  );
}

export default VideoCarousel;
