import { Button } from "react-bootstrap";
import styles from "./ProductCard.module.css";
import ItemQuantity from "../ItemQuantity/ItemQuantity";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import route from "../../routes/route.json";

// eslint-disable-next-line react/prop-types
const ProductCard = ({ id, image, title, price }) => {
  const { cartObj, handleSetCartObj } = useContext(CartContext);
  //const [productQuantity, setProductQuantity] = useState(1);

  const createObject = () => {
    if (!cartObj[id]) {
      const newObj = {
        image: image,
        title: title,
        price: price,
        // quantity: productQuantity,
      };

      // Create a new object with the updated cart data
      const updatedCartObj = { ...cartObj };
      updatedCartObj[id] = newObj;

      // Update the cartObj state with the new object
      handleSetCartObj(updatedCartObj);
    }
  };

  const [showAddToCartBtn, setshowAddToCartBtn] = useState(true);

  useEffect(() => {
    if (!cartObj[id]) {
      setshowAddToCartBtn(true);
    }
  }, [cartObj, id]);

  return (
    <div className="border border-2 d-inline-block m-3 p-3 w-25">
      <Link to={`./${id}`}>
        <div>
          <img src={image} alt="product-image" height="250" width="250" />
        </div>
      </Link>
      <h3 className={styles.productTitle}>{title}</h3>
      <h6>Price: {price}</h6>

      <div>
        {showAddToCartBtn && (
          <Button
            variant="warning"
            className="rounded-pill mt-3"
            onClick={() => {
              setshowAddToCartBtn(false);
              createObject();
            }}
          >
            Add to Cart
          </Button>
        )}
        {!showAddToCartBtn && <ItemQuantity id={id} />}
      </div>
    </div>
  );
};

export default ProductCard;
