import { createContext, ReactNode, useEffect, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";

type Category = {
  [category: string]: Product[];
};

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const CategoriesContext = createContext<any>({
  products: [],
  setProducts: () => {},
});

type ProductProviderProps = {
  children: ReactNode;
};

export const CategoriesProvider = ({ children }: ProductProviderProps) => {
  const [categoriesMap, setCategoriesMap] = useState<Category[]>();
  const value = { categoriesMap };

  useEffect(() => {
    const getCategoriesMap = async() => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  }, [])

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};
