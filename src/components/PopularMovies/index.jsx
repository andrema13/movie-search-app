import React from "react";
import useFetch from "../../hooks/useFetch";
import Error from "../Error";
import Loading from "../Loading";
import MoviesList from "../MoviesList";
import "./index.scss";

const PopularMovies = () => {
  const { data, loading, error } = useFetch(
    `${process.env.REACT_APP_API_BASE_URL}/movie/popular`
  );

  return (
    <div className="popular-movies">
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && data.length > 0 && <MoviesList title={"Popular"} list={data} />}
    </div>
  );
};

export default PopularMovies;
