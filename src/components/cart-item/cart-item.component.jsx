import './cart-item.styles.scss'


const CartItem = ({ cartItem }) => {
  const { name, qunatity,imageUrl , price } = cartItem;
  return (
    <div className="cart-item-container">
    <img src={imageUrl} alt={name} />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">{qunatity} X ${price} </span>

    </div>
    </div>
  );
};

export default CartItem;
