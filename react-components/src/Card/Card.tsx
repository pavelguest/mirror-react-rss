import React from 'react';
import './Card.css';

interface ICard {
  name: string;
}

const Card = (props: ICard) => (
  <div className="Card">
    <p>{props.name}</p>
  </div>
);

export { Card };
