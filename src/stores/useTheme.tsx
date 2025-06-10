import { create } from "zustand";

type Theme = "dark" | "light" | "system";

interface UseThemeChanger {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useThemeChanger = create<UseThemeChanger>((set) => ({
  theme: (localStorage.getItem("vite-ui-theme") as Theme) || "system",

  setTheme: (theme: Theme) => {
    set({ theme });
  },
}));

export default useThemeChanger;
