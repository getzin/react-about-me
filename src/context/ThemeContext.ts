import { createContext, type Dispatch, type SetStateAction } from "react";

export type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => {},
});

export default ThemeContext;