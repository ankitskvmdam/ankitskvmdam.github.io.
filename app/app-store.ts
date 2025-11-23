import React from "react";
import { create } from "zustand";
import { useShallow } from "zustand/shallow";
import { TTheme, TFontSize, TLocale } from "./types/app";

export type TAppStoreState = {
  theme: TTheme;
  fontSize: TFontSize;
  locale: TLocale;
  isFontSettingsDialogOpen: boolean;
  isCommandPaletteOpen: boolean;
};

export type TAppStoreActions = {
  setTheme: (theme: TTheme) => void;
  setFontSize: (fontSize: TFontSize) => void;
  setLocale: (locale: string) => void;
  setFontSettingsDialogOpen: (isOpen: boolean) => void;
  setIsCommandPaletteOpen: (isOpen: boolean) => void;
};

export type TCreateAppStoreOptions = {
  theme?: TTheme;
  fontSize?: TFontSize;
  locale?: TLocale;
};

export function createAppStore(options: TCreateAppStoreOptions = {}) {
  const { theme = "light", fontSize = 16, locale = "en" } = options;

  return create<TAppStoreState & TAppStoreActions>((set) => ({
    theme,
    fontSize,
    locale,
    isFontSettingsDialogOpen: false,
    isCommandPaletteOpen: false,
    setTheme: (theme) => set({ theme }),
    setFontSize: (fontSize) => set({ fontSize }),
    setLocale: (locale) => set({ locale }),
    setFontSettingsDialogOpen: (isOpen) =>
      set({ isFontSettingsDialogOpen: isOpen }),
    setIsCommandPaletteOpen: (isOpen) => set({ isCommandPaletteOpen: isOpen }),
  }));
}

export type TAppStore = ReturnType<typeof createAppStore>;

export const AppStoreContext = React.createContext<TAppStore | null>(null);

export function useAppStore<T>(
  selector: (state: TAppStoreState & TAppStoreActions) => T,
) {
  const useStore = React.useContext(AppStoreContext);

  if (!useStore) {
    throw new Error("useAppStore must be used within an AppStoreProvider");
  }

  return useStore(useShallow(selector));
}
