import { forwardRef } from "react";
import TypingText from "../../components/ui/shadcn-io/typing-text";

import "./Hero.scss";

interface HeroProps {
  // you can still have custom props here if needed
}

const Hero = forwardRef<HTMLDivElement, HeroProps>((_, ref) => {
  return (
    <div ref={ref} className="flex flex-col justify-center">
      <h1 className="text-[26vw] leading-[0.9] font-black text-gray-200">
        ADHAM
      </h1>
      <h1 className="text-[31vw] leading-[0.9] font-black text-gray-200 tracking-wider">
        FARID
      </h1>
    </div>
  );
});

export default Hero;
