"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

interface FitLogContextType {
  planCount: number;
  savedCount: number;
}

const FitLogContext = createContext<FitLogContextType | undefined>(
  undefined
);

export function FitLogProvider({ children }: { children: ReactNode }) {
  const [planCount, setPlanCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <FitLogContext.Provider
      value={{
        planCount,
        savedCount,
      }}
    >
      {children}
    </FitLogContext.Provider>
  );
}

export function useFitLog() {
  const context = useContext(FitLogContext);

  if (!context) {
    throw new Error(
      "useFitLog must be used inside FitLogProvider"
    );
  }

  return context;
} 