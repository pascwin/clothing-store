import { createContext, ReactNode, useEffect, useState } from "react";

const addCartItem = (cartItems: any, productToAdd: any) => {
  let productToIncrease = cartItems.find((item: any) => {
    return item.id === productToAdd.id;
  });
  console.log(productToIncrease);
  if (productToIncrease) {
    // return [cartItems, {...productToAdd, quantity: productToAdd.quantity ++}]
    return cartItems.map((cartItem: any) => {
      return cartItem.id === productToIncrease.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  console.log([...cartItems, { ...productToAdd, quantity: 1 }]);
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartContext = createContext<any>({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

type CartProviderProps = {
  children: ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total: number, cartItem: any) => total + cartItem.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  const addItemToCart = (productToAdd: any) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
