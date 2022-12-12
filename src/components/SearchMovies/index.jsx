import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useFetch from "../../hooks/useFetch";
import MoviesList from "../MoviesList";
import Loading from "../Loading";
import Error from "../Error";
import "./index.scss";

const SearchMovies = ({ query }) => {
  const { data, loading, error, revalidate } = useFetch(
    `${process.env.REACT_APP_API_BASE_URL}/search/movie?query=${query}`
  );

  useEffect(() => {
    revalidate();
  }, [query]);

  return (
    <div className="search-movies">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && data.length > 0 && (
        <MoviesList title={`Search: ${query}`} list={data} />
      )}
    </div>
  );
};

SearchMovies.propTypes = {
  query: PropTypes.string.isRequired,
};

export default SearchMovies;
