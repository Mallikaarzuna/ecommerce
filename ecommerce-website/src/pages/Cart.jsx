import { useContext } from "react";
import CartItems from "../components/CartItems/CartItems";
import { CartContext } from "../contexts/CartContext";
import { Button } from "react-bootstrap";

const Cart = () => {
  const { cartObj, handleSetCartObj, cartCount } = useContext(CartContext);

  const totalMRP = Object.values(cartObj).reduce((sum, item) => {
    const itemMRP = item.price * item.quantity;
    return sum + itemMRP;
  }, 0);

  return (
    <>
      <h3 className="pt-3 text-Right">My Cart</h3>
      <CartItems />
      {!cartCount && <h4>Your Cart is Empty</h4>}
      {cartCount && (
        <div>
          <h4>MRP total: {totalMRP}</h4>
          <Button
            variant="primary"
            onClick={() => {
              handleSetCartObj({});
            }}
          >
            Place Order
          </Button>
        </div>
      )}
    </>
  );
};
export default Cart;
