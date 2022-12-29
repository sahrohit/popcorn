import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieListItem from "./MovieListItem";

const MovieList = ({ title, fetchURL }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const [clickCounter, setClickCounter] = useState(1);
  const [transformStyle, setTransforStyle] = useState("");
  const [clickedTitle, setClickedTitle] = useState("");

  const translate = (title, transformStyle) => {
    if (clickCounter > 13) {
      setClickCounter(0);
      setTransforStyle("translateX(0)");
    } else {
      setClickedTitle(title);
      setTransforStyle(transformStyle);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchURL);
      setData(response.data.data.movies);
      // console.log(response.data.data.movies);
    };
    fetchData().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
    <i
        className="fas fa-chevron-left arrow-left"
        onClick={() => {
          translate(title, `translateX(${-420 * clickCounter}px)`);
          setClickCounter((clickCounter) => clickCounter - 1);
        }}
      ></i>
      <div
        className="movie-list"
        style={{
          transform: clickedTitle === title && transformStyle,
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          data.map((item) => (
            <MovieListItem
              key={item.id}
              imageUrl={item.large_cover_image}
              // imageUrl={item.background_image_original}
              name={item.title}
              description={item.summary}
            />
          ))
        )}
      </div>
      <i
        className="fas fa-chevron-right arrow-right"
        onClick={() => {
          translate(title, `translateX(${-420 * clickCounter}px)`);
          setClickCounter((clickCounter) => clickCounter + 1);
        }}
      ></i>
    </>
  );
};

export default MovieList;
