import React from "react";
import { useAppStore } from "~/app-store";
import { TFontSize } from "~/types/app";

export const fontRange = {
  min: 12,
  max: 24,
  default: 16,
};

export function useFontSettingsAction() {
  const { setFontSize, fontSize } = useAppStore((state) => ({
    setFontSize: state.setFontSize,
    fontSize: state.fontSize,
  }));

  const updateFontSize = React.useCallback(
    async (_fontSize: TFontSize) => {
      if (_fontSize < fontRange.min || _fontSize > fontRange.max) {
        console.error(`Invalid font size: ${_fontSize}`);
        return;
      }
      document.documentElement.style.fontSize = `${_fontSize}px`;
      setFontSize(_fontSize);
      try {
        await fetch("/api/update-app-state", {
          method: "POST",
          body: JSON.stringify({ fontSize: _fontSize }),
        });
      } catch (error) {
        console.error(error);
      }
    },
    [setFontSize],
  );

  return {
    updateFontSize,
    fontSize,
  };
}
