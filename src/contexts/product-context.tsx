import { createContext, ReactNode, useEffect, useState } from "react";
import PRODUCTS from "../shop-data.json";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export const ProductContext = createContext<any>({
  products: [],
  setProducts: () => {},
});

type ProductProviderProps = {
  children: ReactNode;
};

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const value = { products };

  useEffect(() => {
    console.log(PRODUCTS);
    setProducts(PRODUCTS);
  }, []);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
