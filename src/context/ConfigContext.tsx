import React, { createContext, useContext, ReactNode } from 'react';
import { Config } from '../types/types';

export const ConfigContext = createContext<Config>({} as Config);

interface ConfigProviderProps {
  children: ReactNode;
}

export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const cfg: Config = {
    appVersion: __APP_VERSION__,
  };

  return <ConfigContext.Provider value={cfg}>{children}</ConfigContext.Provider>;
};

export const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (context === undefined) {
    throw new Error('useConfig must be used within a ConfigProvider');
  }
  return context;
};
