import React from "react";

const MovieListItem = ({ imageUrl, name, description }) => {
  return (
    <div className="movie-list-item">
      <img className="movie-list-item-img" src={imageUrl} alt="" />
      <span className="movie-list-item-title">{name}</span>
      <p className="movie-list-item-desc">{description}</p>
    </div>
  );
};

export default MovieListItem;
