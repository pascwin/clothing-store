import { ProductContext } from "../../contexts/product-context";
import { useContext } from "react";

import ProductCard from "../ProductCard/ProductCard"
import "./Shop.scss"

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log(products);
  return (
    <div className="products-container">
      {products.map((product: Product) => {
        return (
          <ProductCard key={product.id} product={product} />
        );
      })}
    </div>
  );
};

export default Shop;
