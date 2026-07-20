import { createContext } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
});

export default ThemeContext;