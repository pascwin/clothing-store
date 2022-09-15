import { CategoriesContext } from "../../contexts/categories-context";
import { Fragment, useContext } from "react";

import ProductCard from "../ProductCard/ProductCard";
import "./Shop.scss";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  let content;

  if (categoriesMap) {
    content = Object.keys(categoriesMap).map((title: any) => {
      return (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className="products-container">
            {categoriesMap[title]?.map((product: Product) => {
              return <ProductCard key={product.id} product={product} />;
            })}
          </div>
        </Fragment>
      );
    });
  }

  console.log(categoriesMap);
  return <div>{content}</div>;
};

export default Shop;
