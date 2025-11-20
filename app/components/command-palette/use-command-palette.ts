import React from "react";

export function useCommandPalette() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = React.useState(false);

  const handleKBDownEventListner = React.useCallback((event: KeyboardEvent) => {
    if (event.target !== document.body) {
      return;
    }

    if (event.key === "/") {
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
