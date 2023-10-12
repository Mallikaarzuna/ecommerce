/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import route from "./../routes/route.json";
import { useEffect, useState } from "react";

const Error = () => {
  const [count, setCount] = useState(5);
  const navigation = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (count > 0) {
        setCount(count - 1);
      } else {
        navigation(route.HOME);
      }
    }, 1000);
  }, [count, navigation]);

  return (
    <>
      <h1 className="mt-3 text-danger">SORRY</h1>
      <h5 className="text-danger">
        Couldn't find the page you are looking for...
      </h5>
      <p className="text-primary">
        Please redirect to <Link to={route.HOME}>Home</Link> page
      </p>
      <h5 className="text-warning">
        You will be automatically redirected to Home page in {count} seconds
      </h5>
      {/* Error Image needs to add */}
    </>
  );
};
export default Error;
