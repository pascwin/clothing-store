import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button/Button";

import { CartContext } from "../../contexts/cart-context";
import "./CartDropdown.scss";
import CartItem from "../CartItem/CartItem";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    setIsCartOpen(false)
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item: any) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
