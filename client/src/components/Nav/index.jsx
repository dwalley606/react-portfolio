import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils/helpers";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PropTypes from "prop-types";

import "./style.css"; // Import the CSS file for the component

function Navigation({ currentPage }) {
  const pages = ["portfolio", "contact", "resume"];
  // Add prop types validation for currentPage
  Navigation.propTypes = {
    currentPage: PropTypes.string.isRequired,
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-end">
      <Container>
        <Nav className="nav-links">
          <Nav.Link
            href="#about"
            className={`mx-5 ${currentPage === "/" && "navActive"}`}
            key="about"
          >
            <Link to="/">About</Link>
          </Nav.Link>
          {/* <li
          className={`mx-5 ${currentPage === "/" && "navActive"}`}
          key="about"
          >
          <Link to="/">About</Link>
        </li> */}
          {pages.map((Page) => (
            <Nav.Link
              className={`mx-5 ${currentPage === `/${Page}` && "navActive"}`}
              key={Page}
            >
              <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
