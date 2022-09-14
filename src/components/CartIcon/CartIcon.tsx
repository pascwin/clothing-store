import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { CartContext } from '../../contexts/cart-context';

import './CartIcon.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  let quantity = 0;

  cartItems.forEach((item: any) => {
    quantity = quantity + item.quantity
  });


  return (
    <div className='cart-icon-container'>
      <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen}/>
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;