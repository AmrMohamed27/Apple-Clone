import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Navbar from "./components/Navbar";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <main className="bg-black text-white">
      <header className="flex w-full items-center justify-between p-5 sm:px-10">
        <Navbar />
      </header>
      <section className="nav-height relative w-full">
        <Hero />
      </section>
      <section className="common-padding min-h-screen w-screen bg-zinc">
        <Highlights />
      </section>
      <section className="common-padding">
        <Model />
      </section>
    </main>
  );
}

export default Sentry.withProfiler(App);
