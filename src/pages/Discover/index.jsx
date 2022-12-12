import React, { useState } from "react";
import PopularMovies from "../../components/PopularMovies";
import SearchMovies from "../../components/SearchMovies";
import SearchBox from "../../components/SearchBox";
import "./index.scss";

const Discover = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="discover">
      <SearchBox handleQuery={setQuery} />
      {query !== "" ? <SearchMovies query={query} /> : <PopularMovies />}
    </div>
  );
};

export default Discover;
