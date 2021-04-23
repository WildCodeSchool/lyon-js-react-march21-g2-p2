import axios from 'axios';
// Replace this hardcoded list with a API call to the following endpoint (using the API key)
const genreListEndpoint =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=f22eb05a70b166bd4e2c1312e15d8e8b';
// Replace this hardcoded list with a API call to the following endpoint (using the API key)
const discoverMovieListEndpoint =
  'https://api.themoviedb.org/3/discover/movie?api_key=f22eb05a70b166bd4e2c1312e15d8e8b';
// [REACT] Once the list is retrieved set it to a state with useState() to be able to used

/* 
1) Décomposer en plusieurs fonctions [x]
- Une pour convertir les genres d'un film [x]
- Une qui peut utiliser un ou plusieurs films [x]
2) Utiliser des promesses & les API de TMDB [x]
3) Renvoyer la liste de films avec les genres sous forme de noms (utiliser ...movie) [x]
*/

// Function to get the "Discover" movie list
const getDiscoverMovies = () =>
  axios.get(discoverMovieListEndpoint).then(({ data }) => data.results);

// Function to get the Genres transformed into an object (id: name)
const getGenreList = () =>
  axios
    .get(genreListEndpoint)
    .then(({ data }) => data.genres)
    .then((genres) =>
      genres.reduce((acc, val) => ({ ...acc, [val.id]: val.name }), {})
    );

const movieList = getDiscoverMovies();
console.log(movieList);

/**
 * @description Function to return a list of movies (or a single movie) with the genres converted to names
 * @date 20/04/2021
 * @param {*} movieList : list of movies (TMBD format) of a single movie
 * @return {*} a list of movies (or a single movie) with the genres converted to names
 */
async function ConvertGenreIdToName(movieList) {
  const genreList = await getGenreList();

  const mapGenreIdToName = (genreId) => genreList[genreId];

  const convertMovieGenreIdToName = (movie) => ({
    ...movie,
    genre_ids: movie.genre_ids.map(mapGenreIdToName).flat(),
  });

  const convertMovieListGenreIdToName = (movieOrMovieList) => {
    if (Array.isArray(movieOrMovieList)) {
      return movieOrMovieList.map((movie) => convertMovieGenreIdToName(movie));
    } else if (movieOrMovieList && typeof movieOrMovieList === 'object') {
      return convertMovieGenreIdToName(movieOrMovieList);
    } else {
      throw new Error(
        'Wrong type of argument. Expected a movie or a list of movies'
      );
    }
  };
  return convertMovieListGenreIdToName(movieList);
}

// ConvertGenreIdToName(movieList);

export default ConvertGenreIdToName;
