import { CategoriesContext } from "../../contexts/categories-context";
import { useContext, Fragment } from "react";

import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

  let content;

  if (categoriesMap) {
    content = Object.keys(categoriesMap).map((title: string) => {
      const products = categoriesMap[title];
      return <CategoryPreview key={title} title={title} products={products} />;
    });
  }

  return <Fragment>{content}</Fragment>;
};

export default CategoriesPreview;
