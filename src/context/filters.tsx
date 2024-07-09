import React, { createContext, ReactNode, useContext, useState } from "react";

// 1. Definir el tipo de datos del contexto
interface FiltersContextType {
  filters: {
    category: string;
    minPrice: number;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    category: string;
    minPrice: number;
  }>>;
}

// 2. Crear el contexto con un valor inicial
export const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

// Hook personalizado para usar el contexto
export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  if (!context) {
    throw new Error("useFiltersContext must be used within a FiltersProvider");
  }
  return context;
};

// Proveedor de contexto
interface FiltersProviderProps {
  children: ReactNode;
}

export const FiltersProvider: React.FC<FiltersProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  // 3. Definir el valor del contexto
  const contextValue: FiltersContextType = {
    filters,
    setFilters,
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      {children}
    </FiltersContext.Provider>
  );
};
