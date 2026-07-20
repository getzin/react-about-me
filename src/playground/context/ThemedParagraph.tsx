import { useContext } from "react";
import ThemeContext from "./ThemeContext";

export default function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      className={`rounded-lg p-4 ${
        theme === "light" ? "bg-white text-black" : "bg-zinc-800 text-white"
      }`}
    >
      Aktuelles Theme: <strong>{theme}</strong>
    </p>
  );
}
