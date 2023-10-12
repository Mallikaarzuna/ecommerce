import Dropdown from "react-bootstrap/Dropdown";

// eslint-disable-next-line react/prop-types
const DropDown = ({ userName, dropDownItemClickHandler }) => {
  return (
    <Dropdown className="ms-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Hello, {userName}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={dropDownItemClickHandler}>Logout</Dropdown.Item>

        {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropDown;
