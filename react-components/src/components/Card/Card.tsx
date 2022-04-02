import React from 'react';
import './Card.css';

export interface ICard {
  name: string | null;
  year: number;
  posterUrlPreview: string;
  ratingKinopoisk: number | null;
  ratingImdb: number | null;
}

const Card = (props: ICard) => (
  <div className="Card">
    <img className="Card__img" src={props.posterUrlPreview} alt="movie" />
    <p>{props.name}</p>
    <p>{props.year}</p>
    <div className="Card__rating">
      <span className="rating__text">{props.ratingKinopoisk}</span>
      <span className="rating__text">{props.ratingImdb === null ? '-' : props.ratingImdb}</span>
    </div>
  </div>
);

export { Card };
