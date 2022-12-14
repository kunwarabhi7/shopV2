import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from '../cart-item/cart-item.component'
import Button from "../button/button.component";
import { CartContext} from '../../contexts/cart.context'
 import "./cart-dropdown.styles.scss";

const CartDropDown = () => {
  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()

  const goToCheckOut = () => {
    navigate('/checkout')
  }

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <Button onClick={goToCheckOut}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropDown;
