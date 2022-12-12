import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const source = axios.CancelToken.source();

  const fetchData = useCallback(async () => {
    setError(null);
    setLoading(false);

    try {
      const result = await axios.get(url, {
        params: { api_key: process.env.REACT_APP_API_KEY },
        cancelToken: source.token,
      });

      if (result.data?.results) {
        setData(result.data?.results.slice(0, 10));
      }
      if (result.data?.images) {
        setData(result.data);
      }
    } catch (error) {
      setData(null);
      setError(`Error: ${error}`);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();

    return () => {
      source.cancel();
    };
  }, [fetchData]);

  return { data, loading, error, revalidate: fetchData };
};

useFetch.propTypes = {
  url: PropTypes.string,
};

export default useFetch;
