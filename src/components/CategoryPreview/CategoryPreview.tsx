import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";
import "./CategoryPreview.scss";

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

const CategoryPreview = ({ title, products }: any) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_: any, index: number) => index < 4)
          .map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
