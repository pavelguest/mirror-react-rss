import React from 'react';
import { ICArdMovie } from '../Card/Card';
import './CardForApi.css';

interface ICardForApi {
  currentMovie: ICArdMovie;
  modalWindow?: boolean;
  closeWindow: () => void;
}

const CardForApi = (props: ICardForApi) => (
  <div
    className={props.modalWindow ? 'card-modal active-card' : 'card-modal'}
    onClick={props.closeWindow}
  >
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
      <span className="button__close" onClick={props.closeWindow}>
        close
      </span>
    </div>
  </div>
);

export default CardForApi;
