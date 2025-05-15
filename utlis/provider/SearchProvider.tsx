// utlis/provider/SearchProvider.tsx
"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SearchData {
  fromId: string;
  toId: string;
  journeyDate: Date | undefined;
}

interface SearchContextType {
  data: SearchData;
  setData: (data: SearchData) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<SearchData>({
    fromId: "",
    toId: "",
    journeyDate: undefined,
  });

  return (
    <SearchContext.Provider value={{ data, setData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }
  return context;
};
