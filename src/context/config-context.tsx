"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
type ConfigContextType = {
  scrollSnapPosition: number;
  setScrollSnapPosition: React.Dispatch<React.SetStateAction<number>>;
} | null;

// Create the context with an initial null value
const ConfigContext = createContext<ConfigContextType>(null);

// Hook to use the ConfigContext
export function useConfig() {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
}

// Define the props for ConfigProvider
type ConfigProviderProps = {
  children: ReactNode;
};

// ConfigProvider component
export default function ConfigProvider({ children }: ConfigProviderProps) {
  const [scrollSnapPosition, setScrollSnapPosition] = useState(0);

  return (
    <ConfigContext.Provider
      value={{ scrollSnapPosition, setScrollSnapPosition }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
