import { Route, Routes } from "react-router-dom";

import route from "./route.json";
import MasterLayout from "../layouts/MasterLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import ProductsDetails from "../pages/ProductsDetails";
import ProductsList from "../pages/ProductsList";
import ContactUs from "../pages/ContactUs";
import Cart from "../pages/Cart";
import Login from "../components/Login/Login";

const PageRoute = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<MasterLayout />}>
        <Route index element={<Home />} />
        <Route path={route.PRODUCTS_LIST}>
          <Route index element={<ProductsList />} />
          <Route path=":pid" element={<ProductsDetails />} />
        </Route>
        <Route path={route.CONTACT_US} element={<ContactUs />} />
        <Route path={route.CART} element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default PageRoute;
