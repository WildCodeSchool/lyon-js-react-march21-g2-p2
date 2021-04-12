import React from 'react';
import './CardMovies.css';

function CardMovies(props) {
  return (
    <div className="Card">
      <img className="cover" src={props.img} alt={props.img} />
      <h4 className="title">{props.title}</h4>
      <h5 className="date">{props.date}</h5>
      <h5 className="gender">{props.gender}</h5>
    </div>
  );
}

export default CardMovies;
