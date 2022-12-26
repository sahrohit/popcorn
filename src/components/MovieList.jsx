import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ fetchURL }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchURL);
      setData(response.data.data.movies);
      console.log(response.data.data.movies);
    };
    fetchData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((item) => (
          <MovieListItem
            key={item.id}
            imageUrl={item.background_image_original}
            name={item.title}
            description={item.title_long}
          />
        ))
      )}
    </>
  );
};

export default MovieList;
