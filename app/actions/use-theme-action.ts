import React from "react";
import { useAppStore } from "~/app-store";
import { TTheme } from "~/types/app";

export function useThemeAction() {
  const { theme, setTheme } = useAppStore((state) => ({
    theme: state.theme,
    setTheme: state.setTheme,
  }));

  const updateTheme = React.useCallback(
    async (_theme: TTheme) => {
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(_theme);
      setTheme(_theme);
      try {
        await fetch("/api/update-app-state", {
          method: "POST",
          body: JSON.stringify({ theme: _theme }),
        });
      } catch (error) {
        console.error(error);
      }
    },
    [setTheme],
  );

  const toggleTheme = React.useCallback(() => {
    updateTheme(theme === "light" ? "dark" : "light");
  }, [updateTheme, theme]);

  return {
    toggleTheme,
  };
}
