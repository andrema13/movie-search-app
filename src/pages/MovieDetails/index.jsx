import dayjs from "dayjs";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { formatNumber, getImageHelper } from "../../helpers";
import "./index.scss";

const MovieDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location.state?.item;
  const config = location.state?.config.images;
  const {
    title,
    backdrop_path,
    overview,
    popularity,
    release_date,
    vote_average,
    vote_count,
  } = movie;
  const { secure_base_url, poster_sizes } = config;

  const handleClick = () => {
    return navigate(-1);
  };

  const getImage = () => {
    return getImageHelper({
      className: "movie-details__backdrop-image",
      imgPath: backdrop_path,
      baseUrl: secure_base_url,
      logoSize: poster_sizes[5],
      placeholder: "https://via.placeholder.com/780x439.jpg",
      alt: title,
    });
  };

  const getReleaseDate = () => {
    const formattedDate = dayjs(release_date).format("MMMM D, YYYY");
    return <div title="Release Date">🗓 {formattedDate}</div>;
  };

  const getPopularity = () => {
    const formattedPopularity = formatNumber(popularity, 0);
    return <div title="Popularity">&#128200; {formattedPopularity}</div>;
  };

  const getVoteAverage = () => {
    const formattedVoteAverage = formatNumber(vote_average, 1);
    return <div title="Vote average">⭐ {formattedVoteAverage}</div>;
  };

  return (
    <div className="movie-details">
      <a
        className="movie-details__back-button"
        type="button"
        role={"button"}
        title="Back to Search"
        onClick={handleClick}
      >
        &#8592;
      </a>
      {getImage()}
      <div className="movie-details__description">
        <h3 className="movie-details__description__title" title={title}>
          {title}
        </h3>
        <div className="movie-details__description__activity">
          {getReleaseDate()}
          {getPopularity()}
          <div title="Vote Count">👥 {vote_count}</div>
          {getVoteAverage()}
        </div>
        <p className="movie-details__description__overview" title={overview}>
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
