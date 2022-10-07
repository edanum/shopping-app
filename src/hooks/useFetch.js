import React, { useState, useEffect } from "react";

const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    const doFetch = async () => {
      const res = await fetch(url, options);
      const json = await res.json();
      setResponse(json);
    
    };
    doFetch();
  }, []);
  return response;
};
export default useFetch;
