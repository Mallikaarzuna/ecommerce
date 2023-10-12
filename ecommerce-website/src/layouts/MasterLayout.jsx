import { Outlet } from "react-router-dom";
import AppFooter from "../components/AppFooter/AppFooter";
import AppHeader from "../components/AppHeader/AppHeader";

const MasterLayout = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  );
};
export default MasterLayout;
