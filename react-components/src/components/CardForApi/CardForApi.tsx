import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ICArdMovie } from '../Card/Card';
import './CardForApi.css';

interface ICardForApi {
  currentMovie: ICArdMovie;
}

const CardForApi = (props: ICardForApi) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(props.currentMovie).length == 0) navigate('../');
  });
  return (
    <div className="card-modal">
      <div className="card-wrapper" onClick={(event) => event.stopPropagation()}>
        <img className="card-modal__img" src={props.currentMovie.posterUrl} alt="movie" />
        <div className="card-modal__info">
          <p>Название: {props.currentMovie.nameRu}</p>
          <p>Год выхода: {props.currentMovie.year}</p>
          <div className="card-modal__countries">
            Страна:
            {props.currentMovie.countries &&
              props.currentMovie.countries.map((item, index) => <p key={index}>{item.country}</p>)}
          </div>
          <div className="card-modal__genres">
            Жанр:
            {props.currentMovie.genres &&
              props.currentMovie.genres.map((item, index) => <p key={index}>{item.genre}</p>)}
          </div>
          <div className="card-modal__rating">
            Рейтинг:
            <p className="card-modal__rating">Кинопоиск - {props.currentMovie.ratingKinopoisk}</p>
            <p className="card-modal__rating">
              IMDB - {props.currentMovie.ratingImdb === null ? '-' : props.currentMovie.ratingImdb}
            </p>
          </div>
        </div>
        <span
          className="button__close"
          onClick={() => {
            navigate('../');
          }}
        >
          return home page
        </span>
      </div>
    </div>
  );
};

export default CardForApi;
