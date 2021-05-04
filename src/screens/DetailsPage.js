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

  useEffect(() => {
    // Get movie Id from the url

    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          id +
          '/credits?' +
          'api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )
      .then(({ data }) => {
        setMovieInfo({
          ...movieInfo,
          actors: data.cast.slice(0, 5),
          directors: data.crew.filter(({ job }) => job === 'Director'),
        });
      });

    axios
      .get(
        'https://api.themoviedb.org/3/movie/' +
          id +
          '?api_key=f22eb05a70b166bd4e2c1312e15d8e8b'
      )
      .then(({ data }) => {
        setMovieInfo({
          ...movieInfo,
          poster: data.poster_path,
          synopsis: data.overview,
          genres: data.genres.map((genre) => genre.name),
          title: data.title,
          date: data.release_date,
        });
      });
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
