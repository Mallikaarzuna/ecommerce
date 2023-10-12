import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartObj, setCartObj] = useState({});
  const [cartCount, setCartCount] = useState(0);

  const handleSetCartObj = (obj) => {
    setCartObj(obj);
  };

  useEffect(() => {
    const size = Object.keys(cartObj).length;
    setCartCount(size);
  }, [cartObj]);

  return (
    <CartContext.Provider value={{ cartObj, handleSetCartObj, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
CartProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
