import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import route from "../../routes/route.json";
import { NavLink, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import DropDown from "../DropDown/DropDown";
import { CartContext } from "../../contexts/CartContext";

const AppHeader = () => {
  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white text-decoration-none border border-1 p-1 border-white"
      : "text-white text-decoration-none";
  const navbarStyle = {
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 100,
  };

  const { userData, showLoginPopUp, setUserDataHandler } =
    useContext(AuthContext);

  const { cartCount } = useContext(CartContext);

  const dropDownItemClickHandler = () => {
    setUserDataHandler("");
  };

  //created hook for naviagting to CART page
  const navigate = useNavigate();

  return (
    <header>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" style={navbarStyle}>
        <Container fluid>
          <Navbar.Brand>
            <NavLink
              className="text-white text-decoration-none"
              to={route.HOME}
            >
              ShopEasy
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <NavLink className={activeClasses} to={route.PRODUCTS_LIST}>
                  Products
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink className={activeClasses} to={route.CONTACT_US}>
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "400px" }}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            {!userData && (
              <Button
                className="ms-2"
                variant="warning"
                onClick={showLoginPopUp}
              >
                Login
              </Button>
            )}

            {userData && (
              <DropDown
                userName={userData}
                dropDownItemClickHandler={dropDownItemClickHandler}
              />
            )}
            <Button
              className="ms-2 position-relative"
              onClick={() => navigate(route.CART)}
            >
              {cartCount > 0 && (
                <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              )}
              <i className="bi bi-cart-fill"></i>
              <span className="ms-2">Cart </span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Login />
    </header>
  );
};
export default AppHeader;
