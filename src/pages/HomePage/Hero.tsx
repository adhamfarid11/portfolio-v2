import { forwardRef, useEffect, useState } from "react";
import {
  RiJavaLine,
  RiAppleFill,
  RiReactjsLine,
  RiComputerFill,
} from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { IoLogoPython, IoLogoSass } from "react-icons/io";
import { IoLogoAndroid, IoLogoFigma } from "react-icons/io5";

import "./Hero.scss";

interface HeroProps {}

const Hero = forwardRef<HTMLDivElement, HeroProps>((_, ref) => {
  const [index, setIndex] = useState(0);

  const icons = [
    RiReactjsLine,
    FaGolang,
    RiAppleFill,
    IoLogoAndroid,
    RiJavaLine,
    IoLogoPython,
    RiComputerFill,
    IoLogoSass,
    IoLogoFigma,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % icons.length);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const CurrentIcon = icons[index];

  return (
    <div ref={ref} className="relative flex flex-col justify-center">
      <h1 className="text-[26vw] leading-[0.9] font-black text-gray-200">
        ADHAM
      </h1>
      <h1 className="text-[31vw] leading-[0.9] font-black text-gray-200 tracking-wider">
        FARID
      </h1>
      <div className="absolute custom-svg">
        <svg className="">
          <defs>
            <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#4997fc" />
              <stop offset="50%" stop-color="#346bf0" />
              <stop offset="100%" stop-color="#4997fc" />
            </linearGradient>
          </defs>
          <CurrentIcon fill="url(#grad4)" />
        </svg>
      </div>
    </div>
  );
});

export default Hero;
