import React from "react";

export function useCommandPalette() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);

  const handleKBDownEventListner = React.useCallback((event: KeyboardEvent) => {
    if (
      (event.target instanceof HTMLElement && event.target.isContentEditable) ||
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
  }, []);

  const requestCloseCommandPalette = React.useCallback(() => {
    setIsCommandPaletteOpen(false);
  }, []);

  const requestOpenCommandPalette = React.useCallback(() => {
    setIsCommandPaletteOpen(true);
  }, []);

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
