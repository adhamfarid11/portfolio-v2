import DarkModeButton from "../../components/Buttons/DarkModeButton";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Home Page</h1>
      <DarkModeButton />
    </div>
  );
};

export default HomePage;
