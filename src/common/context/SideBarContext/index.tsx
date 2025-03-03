"use client";

import React, {
  useMemo,
  useState,
  ReactNode,
  useContext,
  useCallback,
  createContext,
} from "react";

type GlobalStateType = {
  
}

type GlobalContextType = {
  getGlobalState: GlobalStateType;
  setGlobalField: (field: keyof GlobalStateType, value: any) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [getGlobalState, setGlobalState] = useState<GlobalStateType>({
    
  });

  const setGlobalField = useCallback(
    <K extends keyof GlobalStateType>(
      field: K,
      value: GlobalStateType[K] | ((prev: GlobalStateType[K]) => GlobalStateType[K])
    ) => {
      setGlobalState(prevState => ({
        ...prevState,
        [field]: typeof value === "function"
          ? (value as (prev: GlobalStateType[K]) => GlobalStateType[K])(prevState[field])
          : value
      }));
    }, []
  );

  const providerValue = useMemo(() => ({
    getGlobalState,
    setGlobalField,
  }), [getGlobalState]);

  return (
    <GlobalContext.Provider value={providerValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};
