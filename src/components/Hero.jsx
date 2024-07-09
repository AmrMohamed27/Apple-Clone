import { heroVideo, smallHeroVideo } from "../utils/index.js";

function Hero() {
  return (
    <div className="flex-center h-full flex-col gap-6">
      <div className="flex-center mt-14 h-5/6 w-full flex-col">
        <h2 className="mb-10 text-3xl font-semibold text-gold max-md:mb-10 md:mb-0">
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
      <div className="flex-center mb-12 flex-col gap-5">
        <button className="rounded-3xl border border-transparent bg-blue px-5 py-2 hover:border-blue hover:bg-transparent hover:text-blue">
          Buy
        </button>
        <p className="text-xl">From $199/month or $999</p>
      </div>
    </div>
  );
}

export default Hero;
