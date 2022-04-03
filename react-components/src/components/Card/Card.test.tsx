import { render, screen } from '@testing-library/react';
import React from 'react';
import { data } from '../../services/data';
import { Card } from './Card';

describe('cards', () => {
  it('render card', () => {
    render(
      <Card
        name={data[0].nameRu}
        year={data[0].year}
        posterUrlPreview={data[0].posterUrlPreview}
        ratingKinopoisk={data[0].ratingKinopoisk}
        ratingImdb={data[0].ratingImdb}
      />
    );
    screen.debug();
    expect(screen.getByText(data[0].nameRu!)).toBeInTheDocument();
  });
  it('render cards', () => {
    data.map((item) => {
      render(
        <Card
          name={item.nameRu}
          year={item.year}
          posterUrlPreview={item.posterUrlPreview}
          ratingKinopoisk={item.ratingKinopoisk}
          ratingImdb={item.ratingImdb}
        />
      );
      screen.debug();
      expect(screen.getByText(item.nameRu!)).toBeInTheDocument();
    });
  });
});
