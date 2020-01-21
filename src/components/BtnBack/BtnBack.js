import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const GoBack = ({ history }) => (
  <Link onClick={() => history.goBack()} className="btn btn-back">
    <FaChevronLeft />
    back
  </Link>
);

export default withRouter(GoBack);
