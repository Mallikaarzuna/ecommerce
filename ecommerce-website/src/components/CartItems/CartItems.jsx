// import { useContext } from "react";
// import ItemQuantity from "../ItemQuantity/ItemQuantity";
// import { CartContext } from "../../contexts/CartContext";

// const CartItems = () => {
//   const { cartObj } = useContext(CartContext);

//   // Convert cartObj into an array of values
//   const cartArray = Object.values(cartObj);

//   const cartList = cartArray.map((item, index) => (
//     <div key={index} className="border border-2 d-inline-block m-3 p-3 w-25">
//       <div>
//         <img src={item.image} alt="product-image" height="250" width="250" />
//       </div>
//       <h3>{item.title}</h3>
//       <h6>Unit Price: {item.price}</h6>
//       <h6>Total Price: {item.price * item.quantity}</h6>
//       <div>
//         <ItemQuantity id={item.id} onQuantityChage={() => {}} />
//       </div>
//     </div>
//   ));

//   return <>{cartList}</>;
// };
// export default CartItems;

import { useContext } from "react";
import ItemQuantity from "../ItemQuantity/ItemQuantity";
import { CartContext } from "../../contexts/CartContext";

const CartItems = () => {
  const { cartObj } = useContext(CartContext);

  // Get the keys (which are the IDs) of cartObj as an array
  const cartIds = Object.keys(cartObj);

  const cartList = cartIds.map((id) => {
    const item = cartObj[id];
    return (
      <>
        <div key={id} className="border border-2 d-inline-block m-3 p-3 w-50 ">
          <div className="row">
            <div className="col-3">
              <img
                src={item.image}
                alt="product-image"
                height="50"
                width="50"
              />
            </div>
            <div className="col-6">
              <h5>{item.title}</h5>
            </div>
            <div className="col-3 text-right">
              <h6>Total Price: {item.price * item.quantity}</h6>
            </div>
            <div className="row my-2">
              <div className="col-4 text-left">
                <h6>Unit Price: {item.price}</h6>
              </div>
              <div className="col-6 text-left"></div>
              <div className="col-2 text-right">
                <ItemQuantity id={id} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });

  return <>{cartList}</>;
};

export default CartItems;
