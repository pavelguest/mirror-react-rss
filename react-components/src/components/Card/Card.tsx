import React from 'react';
import './Card.css';

interface IMovieCountries {
  countries: string;
}
interface IMovieGenres {
  genres: string;
}
export interface ICArdMovie {
  countries?: IMovieCountries[];
  genres?: IMovieGenres[];
  imdbId?: string;
  kinopoiskId?: number;
  nameEn?: null | string;
  nameOriginal?: null | string;
  nameRu?: null | string;
  posterUrl?: string;
  posterUrlPreview?: string;
  ratingImdb?: number | null;
  ratingKinopoisk?: number | null;
  type?: string;
  year?: number;
}

const Card = (props: ICArdMovie) => (
  <div className="Card">
    <img className="Card__img" src={props.posterUrlPreview} alt="movie" />
    <p>{props.nameRu}</p>
    <p>{props.year}</p>
    <div className="Card__rating">
      <span className="rating__text">{props.ratingKinopoisk}</span>
      <span className="rating__text">{props.ratingImdb === null ? '-' : props.ratingImdb}</span>
    </div>
  </div>
);

export { Card };
