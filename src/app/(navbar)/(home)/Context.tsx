"use client"
import React, { useState, createContext, useContext } from 'react';
const HomeContext = createContext<HomeContextType | null>(null);

export interface HomeContextType {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    handleSearchChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
  

export function useHome(): HomeContextType | null {
  const context = useContext(HomeContext);
  return context;
}

interface HomeStateType {
    search: string
}

export const HomeProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>("")

    function handleSearchChange(e:React.ChangeEvent<HTMLInputElement>) {
        setSearch(prev => e.target.value)
    }


  return (
    
    <HomeContext.Provider 
    value={{
      search,
      setSearch,
      handleSearchChange
    }}>
      {children}
    </HomeContext.Provider>
  );

};
