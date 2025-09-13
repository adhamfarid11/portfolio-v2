import { useEffect, useMemo, useState } from "react";
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

  const textsTranslation = ["Konnichiwa!", "Annyeonghaseyo!"];

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > texts.length) {
      setCount(0);
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
    <div className="flex flex-col gap-10">
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
      <pre>{count}</pre>
      <pre>{texts.length}</pre>

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
