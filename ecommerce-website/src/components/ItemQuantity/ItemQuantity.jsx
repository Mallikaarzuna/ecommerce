import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../contexts/CartContext";

// eslint-disable-next-line react/prop-types
const ItemQuantity = ({ id }) => {
  const { cartObj, handleSetCartObj } = useContext(CartContext);
  let initialValue = 0;
  if (cartObj[id]) {
    initialValue = cartObj[id].quantity || 1;
  }

  const [itemCount, setItemCount] = useState(initialValue);

  const IncrementHandler = () => {
    setItemCount(itemCount + 1);
  };
  const DecrementHandler = () => {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  };

  useEffect(() => {
    //increasing quantity when user clicked plus symbol
    if (itemCount > 0 && cartObj[id]) {
      // Create a new object with the updated cart data
      const updatedCartObj = { ...cartObj };
      updatedCartObj[id].quantity = itemCount;

      // Update the cartObj state with the new object
      handleSetCartObj(updatedCartObj);
    }
    if (itemCount == 0) {
      // Create a new object with the item removed
      const updatedCartObj = { ...cartObj };
      delete updatedCartObj[id];

      // Update the cartObj state with the new object
      handleSetCartObj(updatedCartObj);
    }
  }, [itemCount]);

  return (
    <div className="d-flex justify-content-center">
      <Button className="fw-bold" onClick={DecrementHandler}>
        -
      </Button>
      <div className="mx-2">{itemCount}</div>
      <Button className="fw-bold" onClick={IncrementHandler}>
        +
      </Button>
    </div>
  );
};
export default ItemQuantity;
