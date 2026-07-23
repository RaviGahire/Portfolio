import { Work } from "./Work";
import { About } from "./About";
import { Footer } from "../components/common/Footer";
import { Contact } from "./Contact";
import { Hero } from "../components/home/Hero";

export const Home = () => {
  return (
    <>
      <div className="relative bg-zinc-950 overflow-hidden">
        <div className="hidden md:block size-100 bg-(image:--radial-purple-glow) blur-2xl pointer-events-none rounded-full absolute -right-32 -top-32" />
        <div className="hidden md:block size-100 bg-(image:--radial-purple-glow) blur-2xl  pointer-events-none rounded-full absolute -left-40 -bottom-40" />
        <div className="bg-[radial-gradient(oklch(1_0_0/.04)_1px,transparent_1px)] pointer-events-none absolute inset-0" />
        {/* Hero */}
        <Hero/>
      </div>
      {/* Work */}
      <Work />
      {/* About */}
      <About />
      {/* Contact */}
      <Contact />
      {/* Footer */}
      <Footer />
    </>
  );
};
