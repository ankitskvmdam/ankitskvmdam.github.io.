export type TTheme = "light" | "dark";
export type TFontSize = number;
export type TLocale = string;

export type TAppState = {
  theme: TTheme;
  fontSize: TFontSize;
  locale: TLocale;
};
