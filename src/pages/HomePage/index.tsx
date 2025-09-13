import PreHomePage from "../PreHomePage";

const HomePage: React.FC = () => {
  return (
    <div
      className={`
    h-screen bg-white text-black dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center gap-4 text-center`}
    >
      <PreHomePage />
    </div>
  );
};

export default HomePage;
