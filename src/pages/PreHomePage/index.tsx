import { useMemo } from "react";
import TypingText from "../../components/ui/shadcn-io/typing-text";

const PreHomePage: React.FC = () => {
  const texts = [
    "こんにちは!",
    "안녕하세요!",
    "Hi there!",
    "Hai, apa kabar!",
    "¡Hola!",
    "Ciao!",
    "Salut!",
  ];

  const textsTranslation = [
    "Konnichiwa!",
    "Annyeonghaseyo!",
    "Hi there!",
    "Hai, apa kabar!",
    "¡Hola!",
    "Ciao!",
    "Salut!",
  ];

  // pair & shuffle
  const randomized = useMemo(() => {
    const paired = texts.map((text, i) => ({
      original: text,
      translation: textsTranslation[i],
    }));
    const shuffled = [...paired].sort(() => Math.random() - 0.5);
    return {
      randomizedTexts: shuffled.map((item) => item.original),
      randomizedTranslations: shuffled.map((item) => item.translation),
    };
  }, []);

  // track index

  return (
    <>
      <TypingText
        text={randomized.randomizedTexts}
        typingSpeed={75}
        pauseDuration={1500}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold  
                   bg-gradient-to-r from-blue-light-primary via-blue-dark-primary to-blue-light-primary 
                   bg-clip-text text-transparent"
        variableSpeed={{ min: 50, max: 120 }}
      />
    </>
  );
};

export default PreHomePage;
