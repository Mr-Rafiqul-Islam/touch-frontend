import { createContext, useContext, useState } from "react";

interface SearchResult {
  data: any | null;
  setData: (data: any) => void;
}

const SearchContext = createContext<SearchResult | undefined>(undefined);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<any | null>(null);

  return (
    <SearchContext.Provider value={{ data, setData }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within a SearchProvider");
  }
  return context;
};
