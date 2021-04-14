import './MoviesPage.css';
import MovieCard from './MovieCard';
import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

const movies = [
  {
    title: "Le Monde de Narnia : L'Odyssée du Passeur d'aurore",
    date: 2010,
    genre: 'Fantasy',
    id: 1,
    img: 'https://fr.web.img2.acsta.net/medias/nmedia/18/35/53/32/18463695.jpg',
  },
  {
    title: 'Le monde Narnia',
    date: 2008,
    genre: 'Fantasy',
    id: 2,
    img:
      'https://img-4.linternaute.com/g6QIa_CMEJR52Oyy_04PVEx6sas=/1240x/85e65e8e98d2486cb19253c16001601a/ccmcms-linternaute/80965.jpg',
  },
  {
    title:
      "Le Monde de Narnia : Le Lion, la Sorcière blanche et l'Armoire magique",
    date: 2005,
    genre: 'Fantasy',
    id: 3,
    img:
      'https://img-4.linternaute.com/g6QIa_CMEJR52Oyy_04PVEx6sas=/1240x/85e65e8e98d2486cb19253c16001601a/ccmcms-linternaute/80965.jpg',
  },

  {
    title: 'Lion',
    date: 2016,
    genre: 'Drame',
    id: 4,
    img: 'https://fr.web.img3.acsta.net/pictures/17/01/25/09/36/363964.jpg',
  },
  {
    title: 'Comic Scrip',
    date: 2021,
    genre: 'Horror',
    id: 5,
    img: 'https://image.freepik.com/vecteurs-libre/monstre-jaune_6460-403.jpg',
  },
];

function MovieList() {
  return (
    <Fragment>
      <Grid container spacing={24} justify="center">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            date={movie.date}
            genre={movie.genre}
            img={movie.img}
            n
          />
        ))}
      </Grid>
    </Fragment>
  );
}
export default MovieList;
