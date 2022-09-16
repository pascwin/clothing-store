import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";

import { CategoriesContext } from "../../contexts/categories-context";

import "./Category.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    if (category && categoriesMap) {
      setProducts(categoriesMap[category]);
    }
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className="category-title">{category?.toLocaleUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product: any) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </Fragment>
  );
};

export default Category;
