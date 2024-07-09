import { heroVideo } from "../utils/index.js";

function Hero() {
  return (
    <div className="flex-center flex-col gap-6">
      <div className="flex-center mt-14 w-full flex-col">
        <h2 className="mb-10 text-3xl font-semibold text-gold md:mb-0">
          iPhone 15 Pro
        </h2>
        <div className="w-5/6">
          <video autoPlay loop muted playsInline className="size-full">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex-center flex-col gap-6">
        <button className="rounded-3xl border border-transparent bg-blue px-5 py-2 hover:border-blue hover:bg-transparent hover:text-blue">
          Buy
        </button>
        <p className="text-xl">From $199/month or $999</p>
      </div>
    </div>
  );
}

export default Hero;
