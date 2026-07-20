import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemedButton() {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      className={`rounded-lg px-4 py-2 font-semibold transition ${
        theme === "light"
          ? "bg-blue-500 text-white"
          : "bg-yellow-300 text-black"
      }`}
    >
      Theme: {theme}
    </button>
  );
}
