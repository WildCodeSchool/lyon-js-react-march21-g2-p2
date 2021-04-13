import React from 'react';
import './MovieCard.css';

function MovieCard({ img, date, title, genre }) {
  return (
    <div className="Card">
      <img className="cover" src={img} alt={title} />
      <h4 className="title">{title}</h4>
      <h5 className="date">{date}</h5>
      <h5 className="genre">{genre}</h5>
    </div>
  );
}

export default MovieCard;
