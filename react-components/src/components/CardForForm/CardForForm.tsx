import React from 'react';
import { ICardForForm } from '../Forms/Forms';
import './CardForForm.css';

const CardForForm = (props: ICardForForm) => (
  <div className="card-form">
    <img className="card-form__image" src={props.file} alt="image" />
    <div>{props.name}</div>
    <div>{props.date}</div>
    <div>{props.country}</div>
    <div>{props.isRight}</div>
  </div>
);

export default CardForForm;
