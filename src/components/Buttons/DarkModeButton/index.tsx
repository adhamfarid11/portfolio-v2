import { useDarkMode } from "../../../hooks/useDarkMode";

const DarkModeButton: React.FC = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <button
      onClick={toggle}
      className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
    >
      {isDark ? "Switch to Light ☀️" : "Switch to Dark 🌙"}
    </button>
  );
};

export default DarkModeButton;
