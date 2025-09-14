import { useRef } from "react";
import PreHomePage from "../PreHomePage";
import Hero from "./Hero";

const HomePage: React.FC = () => {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center gap-4 text-center`}
    >
      <PreHomePage textDisplayCount={1} onComplete={scrollToHero} />
      <Hero ref={heroRef} />
      <div className="h-screen bg-red-300">aksksdks</div>
    </div>
  );
};

export default HomePage;
