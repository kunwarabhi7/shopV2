import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { CategoriesContext } from "../../contexts/categories-context";
import "./shop.styles.scss";

const Shop = () => {
  const {  } = useContext(CategoriesContext);
  return (
    <div className="products-container">
      {/* {products.map((products) => {
        return (
          <div key={products.id}>
            <ProductCard products={products} />
          </div>
        );
      })} */}
    </div>
  );
};

export default Shop;
