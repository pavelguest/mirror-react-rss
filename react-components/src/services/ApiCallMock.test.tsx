import axios from 'axios';
import HomePage from '../pages/HomePage';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { ICArdMovie } from '../components/Card/Card';
jest.mock('axios');

type responseType = {
  data: ICArdMovie;
};

describe('getdata', () => {
  let response: responseType;
  beforeEach(() => {
    response = {
      data: {
        kinopoiskId: 435,
        imdbId: 'tt0120689',
        nameRu: 'Зеленая миля',
        nameEn: null,
        nameOriginal: 'The Green Mile',
        countries: [{ country: 'Россия' }],
        genres: [{ genre: 'драма' }],
        ratingKinopoisk: 9.1,
        ratingImdb: 8.6,
        year: 1999,
        type: 'FILM',
        posterUrl: 'https://kinopoiskapiunofficial.tech/images/posters/kp/435.jpg',
        posterUrlPreview: 'https://kinopoiskapiunofficial.tech/images/posters/kp_small/435.jpg',
      },
    };
  });
  test('api call should be called', async () => {
    (axios.get as jest.Mock).mockResolvedValue(response);
    render(<HomePage />);
    const searchInput = screen.getByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'миля' } });
    fireEvent.keyUp(searchInput, { key: 'Enter', charCode: 13 });
    expect(axios.get).toBeCalledTimes(1);
  });
});
