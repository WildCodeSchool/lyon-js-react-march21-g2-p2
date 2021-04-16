/*HomePage function which wil call MovieList rendering in MovieCard*/

/*component import*/
import React from 'react';
import './MoviesPage.css';
import MovieList from './components/MovieList';
//import MovieCard from './components/MovieCard';
//<MovieCard /> {/*not sure how to put render MovieList with MovieCard*/}

const HomePage = () => {
  return (
    <div>
      <h1>Here is the list of all movies</h1>
      {/* pass the const GeneralData as props to MovieList component, like
      <MovieList generalData={generalData}/> */}
      <MovieList>
        {/*not sure how to put render MovieList with MovieCard*/}
      </MovieList>
    </div>
  );
};

export default HomePage;
