import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { formatNumber, getImageHelper } from "../../helpers";
import "./index.scss";

const ListItem = ({ item, config }) => {
  const { title, poster_path, vote_average, popularity, id } = item;
  const { secure_base_url, logo_sizes } = config.images;

  const getImage = () => {
    return getImageHelper({
      className: "list-item__image",
      imgPath: poster_path,
      baseUrl: secure_base_url,
      logoSize: logo_sizes[0],
      placeholder: "https://via.placeholder.com/45x68.jpg",
      alt: title,
    });
  };

  const getPopularity = () => {
    const result = formatNumber(popularity, 0);
    return (
      <div
        className="list-item__description__popularity"
        aria-label={`Popularity ${title}`}
        title="Popularity"
      >
        &#128200; {result}
      </div>
    );
  };

  const getTitle = () => {
    return (
      <div className="list-item__description__title" title={title}>
        {title}
      </div>
    );
  };

  const getVoteAverage = () => {
    const result = formatNumber(vote_average, 1);
    return (
      <span
        className="list-item__details__badge"
        aria-label={`Vote Average ${result}`}
        title="Vote Average"
      >
        {result} ⭐
      </span>
    );
  };

  return (
    <div className="list-item">
      <Link
        className="list-item__link"
        to={`/movie/${id}`}
        state={{ item, config }}
        aria-label={title}
      >
        {getImage()}
        <div className="list-item__details">
          <div className="list-item__description">
            {getTitle()}
            {getPopularity()}
          </div>
          {getVoteAverage()}
        </div>
      </Link>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.shape({
    adult: PropTypes.bool,
    backdrop_path: PropTypes.string,
    genre_ids: PropTypes.arrayOf(PropTypes.number),
    id: PropTypes.number,
    original_language: PropTypes.string,
    original_title: PropTypes.string,
    overview: PropTypes.string,
    popularity: PropTypes.number,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    title: PropTypes.string,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }),
  config: PropTypes.shape({
    images: PropTypes.shape({
      secure_base_url: PropTypes.string,
      profile_sizes: PropTypes.arrayOf(PropTypes.string),
      still_sizes: PropTypes.arrayOf(PropTypes.string),
      logo_sizes: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};
export default ListItem;
