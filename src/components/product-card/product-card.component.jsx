import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ products }) => {
  const { name, imageUrl, price } = products;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button buttonType="inverted">Add To Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
