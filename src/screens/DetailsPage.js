/* eslint-disable no-lone-blocks */

/*component import*/
import MovieInfos from '../components/MovieInfos';
import ReviewList from '../components/ReviewList';
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import UsersComments from '../components/UsersComment';
import { makeStyles } from '@material-ui/core/styles';

//---------------------- STYLE CSS -------------------------//
const useStyles = makeStyles((theme) => ({
  reviewSection: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 25,
    marginBottom: 20,
  },
}));

export default function DetailsPage() {
  /*Use states we need to store the APIs call*/

  const classes = useStyles();
  const { tmdb_id } = useParams();
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;
  const apiUrl = process.env.REACT_APP_API_SERVICE_URL;
  const apiBase = process.env.REACT_APP_API_BASE_URL;
  const imgUrl = process.env.REACT_APP_API_IMAGE_URL;

  const [movie, setMovie] = useState('');
  const [movieActors, setMovieActors] = useState([]);
  const [movieProductionCrew, setMovieProductionCrew] = useState([]);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  /*To get the informations required*/

  const getMovieGeneralInfos = axios.get(
    `${apiUrl}/movie/${tmdb_id}?api_key=${apiKey}&language=en-US`
  );
  const getMovieCrewInfos = axios.get(
    `${apiUrl}/movie/${tmdb_id}/credits?api_key=${apiKey}&language=en-US`
  );

  useEffect(() => {
    axios
      .all([getMovieGeneralInfos, getMovieCrewInfos])
      .then(
        axios.spread((generalInfo, crewInfos) => {
          setMovie(generalInfo.data);
          setMovieActors(crewInfos.data.cast);
          setMovieProductionCrew(crewInfos.data.crew);
          setMovieGenreList(generalInfo.data.genres);
        })
      )
      .catch((error) => {
        console.log('Error :', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    axios
      .get(`${apiBase}/movies/${tmdb_id}/reviews`)
      .then((res) => setReviewList(res.data))
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tmdb_id]);

  return (
    <>
      <MovieInfos
        poster={`${imgUrl}/w500${movie.poster_path}`}
        title={movie.title}
        date={movie.release_date}
        synopsis={movie.overview}
        actors={movieActors}
        prodCrew={movieProductionCrew}
        movieGenreList={movieGenreList}
      />
      <UsersComments
        title={movie.title}
        id={tmdb_id}
        setReviewList={setReviewList}
      />
      {reviewList.length === 0 ? (
        <h3 className={classes.reviewSection}>
          Be the first to write a review 🚀
        </h3>
      ) : (
        <h3 className={classes.reviewSection}>Reviews</h3>
      )}
      <ReviewList variant="outlined" reviewList={reviewList} />
    </>
  );
}
