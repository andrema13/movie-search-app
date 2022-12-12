import React from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => {
  return <div>{error}</div>;
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
