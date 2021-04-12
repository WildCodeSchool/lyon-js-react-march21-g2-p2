import './card.css';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function Card(props) {
  
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    axios
  
      .get(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )
  
      .then((response) => response.data)
        
      .then((data) => {
        setPopularMovie(data.results);
      });
  }, []);
  
  

  return (
    <ul className="card">
      {popularMovie
      .map(movie =>  <li>{movie.title}</li>)}
    </ul>
  );
}
