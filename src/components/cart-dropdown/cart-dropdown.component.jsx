import { useContext } from "react";
import CartItem from '../cart-item/cart-item.component'
import Button from "../button/button.component";
import { CartContext} from '../../contexts/cart.context'
 import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      {cartItems.map(item=> <CartItem key={item.id} cartItem={item} />)}
      <Button>Go To Checkout</Button>
    </div>
  );
};

export default CartDropDown;
