import PropTypes from "prop-types";
import coverImage from "../../assets/cover/cover-image.jpg";
import "./style.css"; // Import the CSS file for the component

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>Daniel Walley</h1>
      <img src={coverImage} alt="wooden background"></img>
      {props.children}
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
