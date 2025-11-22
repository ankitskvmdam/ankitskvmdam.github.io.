import React, { useEffect } from "react";
import {
  createAppStore,
  AppStoreContext,
  TAppStore,
  TCreateAppStoreOptions,
} from "./app-store";

export type TAppStoreProviderProps = {
  config: TCreateAppStoreOptions;
  children: React.ReactNode;
};

export function AppStoreProvider(props: TAppStoreProviderProps) {
  const { config } = props;
  const store = React.useRef<TAppStore>(null);

  if (!store.current) {
    store.current = createAppStore(config);
  }

  useEffect(() => {
    if (!store.current) return;

    const currentState = store.current.getState();

    if (currentState.theme !== config.theme && config.theme) {
      store.current.getState().setTheme(config.theme);
    }

    if (currentState.fontSize !== config.fontSize && config.fontSize) {
      store.current.getState().setFontSize(config.fontSize);
    }

    if (currentState.locale !== config.locale && config.locale) {
      store.current.getState().setLocale(config.locale);
    }
  }, [config]);

  return (
    <AppStoreContext.Provider value={store.current}>
      {props.children}
    </AppStoreContext.Provider>
  );
}
