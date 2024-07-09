import { heroVideo } from "../utils/index.js";

function Hero() {
  return (
    <>
      <div className="flex-center mt-14 w-full flex-col">
        <h2 className="mb-10 text-3xl font-bold text-gold md:mb-0">
          iPhone 15 Pro
        </h2>
        <div className="w-3/4">
          <video autoPlay ref={videoRef}>
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default Hero;
