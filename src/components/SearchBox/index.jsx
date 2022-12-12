import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import debounce from "lodash.debounce";
import "./index.scss";

const SearchBox = ({ handleQuery }) => {
  const [search, setSearch] = useState("");

  const delayQuery = useCallback(
    debounce((query) => {
      handleQuery(query);
    }, 500),
    []
  );

  const handleChange = (event) => {
    setSearch(event.target.value);
    delayQuery(event.target.value);
  };

  return (
    <form className="search">
      <input
        className="search__input"
        type="search"
        value={search}
        size={30}
        onChange={handleChange}
        placeholder="Fancy to do a &#127916; search? &#128540;"
      />
    </form>
  );
};

SearchBox.propTypes = {
  handleQuery: PropTypes.func,
};

export default SearchBox;
