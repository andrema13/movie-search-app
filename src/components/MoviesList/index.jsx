import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem";
import config from "../ConfigHOC";
import "./index.scss";

const MoviesList = ({ title, list }) => {
  const getListItems = () => {
    return list?.map((movie) => {
      const Item = config(ListItem);
      return <Item key={movie.id} item={movie} />;
    });
  };

  return (
    <div className="movies-list">
      <h2 className="movies-list__title" aria-label={title}>
        {title}
      </h2>
      {getListItems()}
    </div>
  );
};

MoviesList.propTypes = {
  title: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.object),
};

export default MoviesList;
