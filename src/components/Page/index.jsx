import { useEffect } from "react";
import PropTypes from "prop-types";
import PageContent from "../PageContent";
import "./style.css"; // Import the CSS file for the component

import { capitalizeFirstLetter } from "../../utils/helpers";
import { Outlet } from "react-router-dom";

function Page({ currentPage }) {
  currentPage = currentPage.substring(1);

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage);
  }, [currentPage]);

  return (
    <section>
      <h2>{capitalizeFirstLetter(currentPage)}</h2>

      <PageContent>
        <Outlet />
      </PageContent>
    </section>
  );
}

Page.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default Page;
