import { useEffect, useState } from "react";
import TypingText from "../../components/ui/shadcn-io/typing-text";

interface PreHomePageProps {
  textDisplayCount: number;
  onComplete: () => void;
}

const PreHomePage: React.FC<PreHomePageProps> = ({
  textDisplayCount,
  onComplete,
}) => {
  const texts = [
    "こんにちは!",
    "안녕하세요!",
    "Hi there!",
    "Hai, apa kabar!",
    "¡Hola!",
    "Ciao!",
    "Salut!",
  ];

  const textsTranslation = ["Konnichiwa!", "Annyeonghaseyo!"];

  const [count, setCount] = useState(0);
  const [onCompleted, setOnCompleted] = useState(false);

  useEffect(() => {
    if (count > texts.length) {
      setCount(0);
    }
    if (count > textDisplayCount && !onCompleted) {
      onComplete();
      setOnCompleted(true);
    }
  }, [count]);

  const getRandomizedNumbers = (texts: string[]) => {
    const numbers = texts.map((_, i) => i);
    const shuffledNumbers = [...numbers].sort(() => Math.random() - 0.5);
    return shuffledNumbers;
  };

  const [randomizedNumber] = useState(() => getRandomizedNumbers(texts));

  const getRandomizedTexts = () => {
    return randomizedNumber.map((i) => texts[i]);
  };

  const handleShowingTranslation =
    randomizedNumber[count] == 0 || randomizedNumber[count] == 1;

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-10">
      <TypingText
        text={getRandomizedTexts()}
        typingSpeed={75}
        pauseDuration={1500}
        className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold  
                   bg-gradient-to-r from-blue-light-primary via-blue-dark-primary to-blue-light-primary 
                   bg-clip-text text-transparent"
        variableSpeed={{ min: 50, max: 120 }}
        onSentenceComplete={() => {
          setCount((prev) => prev + 1);
        }}
      />

      {handleShowingTranslation && (
        <TypingText
          text={textsTranslation[randomizedNumber[count]]}
          typingSpeed={75}
          pauseDuration={1500}
          className="text-2xl font-semibold text-gray-700"
          variableSpeed={{ min: 50, max: 120 }}
        />
      )}
    </div>
  );
};

export default PreHomePage;
