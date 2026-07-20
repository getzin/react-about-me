import { useState } from "react";

import PlaygroundCard from "../PlaygroundCard";

import ThemeContext from "./ThemeContext";
import ThemedButton from "./ThemedButton";
import ThemedParagraph from "./ThemedParagraph";

export default function ContextExample() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <PlaygroundCard
      title="React Context"
      concepts="createContext • Provider • useContext"
    >
      <ThemeContext.Provider value={{ theme }}>
        <div className="space-y-4">
          <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-lg bg-cyan-600 px-4 py-2 text-white hover:bg-cyan-500"
          >
            Theme wechseln
          </button>

          <ThemedButton />

          <ThemedParagraph />
        </div>
      </ThemeContext.Provider>
    </PlaygroundCard>
  );
}
