import { useContext, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Login = () => {
  const { setUserDataHandler, loginPopUp, closeLoginPopUp, showLoginPopUp } =
    useContext(AuthContext);

  const location = useLocation();

  // Check if the current route is '/login' to display the modal
  //const showModal = location.pathname === "/login";
  if (location.pathname === "/login") {
    console.log("Hello");
    showLoginPopUp();
  }

  // if (!showModal) {
  //   return null; // Return nothing if the route is not '/login'
  // }

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const resetHandler = () => {
    setUserName("");
    setPassword("");
  };

  const showError = (msg) => {
    setErrorMsg(msg);
    setTimeout(() => {
      setErrorMsg("");
    }, 3000);
  };

  const submitHandler = () => {
    if (!(userName && password)) {
      showError("Please provide username and password !!!");
      return;
    }
    //simulating api
    setTimeout(() => {
      if (userName === password) {
        closeLoginPopUp();
        setUserDataHandler(userName);
        resetHandler();
      } else {
        showError("Incorrect username or password !!!");
      }
    }, 2000);
  };

  return (
    <>
      <Modal
        show={loginPopUp}
        onHide={() => {
          closeLoginPopUp();
          resetHandler();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3 text-start"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="fw-bold">User Name:</Form.Label>
              <div className="input-group">
                <Form.Control
                  type="text"
                  placeholder="Enter user name"
                  autoFocus
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>
              </div>
            </Form.Group>

            <Form.Group
              className="mb-3 text-start"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label className="fw-bold">Password:</Form.Label>
              <div className="input-group">
                <Form.Control
                  className="w-75"
                  type="password"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>
              </div>
            </Form.Group>
          </Form>
          <h6 className="text-danger">{errorMsg}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={submitHandler}>
            Submit
          </Button>
          <Button variant="secondary" onClick={resetHandler}>
            Reset
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Login;
