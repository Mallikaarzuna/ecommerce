import { useContext, useEffect, useState } from "react";
import { Button, Container, Image, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ItemQuantity from "../components/ItemQuantity/ItemQuantity";

const ProductsDetails = () => {
  //accessing product id from url
  const { pid } = useParams();

  const [product, setProduct] = useState([]);

  const { cartObj, handleSetCartObj } = useContext(CartContext);

  const [showAddToCartBtn, setshowAddToCartBtn] = useState(true);

  useEffect(() => {
    if (cartObj[pid]) {
      setshowAddToCartBtn(false);
    }
  }, [pid]);

  //calling api when component loads
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${pid}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [pid]);

  const createObject = () => {
    if (!cartObj[pid]) {
      const newObj = {
        image: product.image,
        title: product.title,
        price: product.price,
        // quantity: productQuantity,
      };

      // Create a new object with the updated cart data
      const updatedCartObj = { ...cartObj };
      updatedCartObj[pid] = newObj;

      // Update the cartObj state with the new object
      handleSetCartObj(updatedCartObj);
    }
  };

  useEffect(() => {
    if (!cartObj[pid]) {
      setshowAddToCartBtn(true);
    }
  }, [cartObj, pid]);

  return (
    <Container className="mt-3">
      <Row className="my-2">
        <Col md={6} className="text-center">
          <div className="border border-2 d-inline-block m-1 p-2 w-45">
            <Image
              src={product.image}
              height="350"
              width="350"
              className="my-3"
            />
          </div>
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <h3 className="pt-3 text-center">Products Details</h3>
          {/* <h5 className="m-3 text-center">Price: {product.rating.rate}</h5> */}
          <h3 className="pt-3 text-center">{product.title}</h3>
          <p className="pt-3 text-center">{product.description}</p>
          <h5 className="m-3 text-center">Price: {product.price}</h5>
          {/* <Button variant="warning" className="rounded-pill mt-3">
            Add to Cart
          </Button> */}
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
            {!showAddToCartBtn && <ItemQuantity id={pid} />}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductsDetails;
