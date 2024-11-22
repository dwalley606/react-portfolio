import PropTypes from "prop-types";
import "./style.css"; // Import the CSS file for the component

function Header(props) {
  return (
    <header className="d-flex flex-row align-items-center">
      <h1 className="me-3">Daniel Walley</h1>
      {props.children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
