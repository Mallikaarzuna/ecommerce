import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  //storing all the data in products state
  const [products, setProducts] = useState([]);

  //calling api when component loads
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //create array of product cards by using map
  const cards = products.map((product) => {
    return (
      <ProductCard
        key={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        id={product.id}
      />
    );
  });

  //returning cards array
  return <>{cards}</>;
};
export default Products;
