import { forwardRef } from "react";

interface HeroProps {
  // you can still have custom props here if needed
}

const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  return (
    <div ref={ref} className="h-screen bg-red-100">
      Hero
    </div>
  );
});

export default Hero;
