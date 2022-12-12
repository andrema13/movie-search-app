import React from "react";
import useFetch from "../../hooks/useFetch";

const config = (Component) => (props) => {
  const { data } = useFetch(
    `${process.env.REACT_APP_API_BASE_URL}/configuration`
  );

  return data && <Component {...props} config={data} />;
};

export default config;
