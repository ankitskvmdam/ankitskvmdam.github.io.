import React from "react";
import { useAppStore } from "~/app-store";

export function useCommandPalette() {
  const { isCommandPaletteOpen, setIsCommandPaletteOpen } = useAppStore(
    (state) => ({
      isCommandPaletteOpen: state.isCommandPaletteOpen,
      setIsCommandPaletteOpen: state.setIsCommandPaletteOpen,
    }),
  );

  const handleKBDownEventListner = React.useCallback(
    (event: KeyboardEvent) => {
      if (
        (event.target instanceof HTMLElement &&
          event.target.isContentEditable) ||
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (
        event.key === "/" ||
        (event.key === "k" && (event.metaKey || event.ctrlKey))
      ) {
        event.preventDefault();
        setIsCommandPaletteOpen(true);
      }
    },
    [setIsCommandPaletteOpen],
  );

  const requestCloseCommandPalette = React.useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, [setIsCommandPaletteOpen]);

  const requestOpenCommandPalette = React.useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, [setIsCommandPaletteOpen]);

  React.useEffect(() => {
    window.addEventListener("keydown", handleKBDownEventListner);

    return () => {
      window.removeEventListener("keydown", handleKBDownEventListner);
    };
  }, [handleKBDownEventListner]);

  return {
    isCommandPaletteOpen,
    requestCloseCommandPalette,
    requestOpenCommandPalette,
  };
}
