/* eslint-disable react-hooks/exhaustive-deps */
import MovieInfos from '../components/MovieInfos';
import ReviewList from '../components/ReviewList';
import React, { useEffect, useState } from 'react';
import UserCommentsSection from '../components/UsersComment';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    margin: 'auto',
    padding: '1em',
    maxWidth: '80%',
    maxHeight: '80%',
    overflowY: 'scroll',
  },
}));

export default function DetailsPage() {
  const [movieInfo, setMovieInfo] = useState({});
  const { id } = useParams();

  const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
  const movieInfoUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;

  useEffect(() => {
    const requestMovieCredits = axios.get(movieCreditsUrl);
    const requestMovieInfo = axios.get(movieInfoUrl);

    Promise.all([requestMovieCredits, requestMovieInfo])
      .then(([responseMovieCredits, responseMovieInfo]) => {
        setMovieInfo({
          ...movieInfo,
          actors: responseMovieCredits.data.cast.slice(0, 5),
          directors: responseMovieCredits.data.crew.filter(
            ({ job }) => job === 'Director'
          ),
          poster: responseMovieInfo.data.poster_path,
          synopsis: responseMovieInfo.data.overview,
          genres: responseMovieInfo.data.genres.map((genre) => genre.name),
          title: responseMovieInfo.data.title,
          date: responseMovieInfo.data.release_date,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  const { card } = useStyles();

  return (
    <>
      <Card className={card}>
        <MovieInfos
          id={id}
          poster={movieInfo.poster}
          title={movieInfo.title}
          date={movieInfo.date}
          synopsis={movieInfo.synopsis}
          actors={movieInfo.actors}
          directors={movieInfo.directors}
        />
        <UserCommentsSection title={movieInfo.title} id={movieInfo.movieId} />
        <ReviewList movie_id={id} />
      </Card>
    </>
  );
}
