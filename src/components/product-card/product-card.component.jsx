import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";

const ProductCard = ({ products }) => {
  const {addItemToCart} = useContext(CartContext)
  const { name, imageUrl, price } = products;
  
  const  addProductToCart = () =>{
    addItemToCart(products)
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted" onClick={addProductToCart} >Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
