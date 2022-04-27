import React, { createContext, Dispatch, useReducer } from 'react';
import { ICArdMovie, IMovieCountries, IMovieGenres } from './components/Card/Card';
import { ICardForForm } from './components/Forms/Forms';
import { FormPageActions, formReducer, HomePageActions, moviesReducer } from './reducers';

export interface IMovieCards {
  countries: IMovieCountries[];
  genres: IMovieGenres[];
  imdbId: string;
  kinopoiskId: number;
  nameEn: null | string;
  nameOriginal: null | string;
  nameRu: null | string;
  posterUrl: string;
  posterUrlPreview: string;
  ratingImdb: number | null;
  ratingKinopoisk: number | null;
  type: string;
  year: number;
}

export interface IHomePage {
  movies: IMovieCards[];
  currentMovie: ICArdMovie;
  searchInput: string;
  page: number;
  pages: number;
  sort: string;
}

export enum CountryEnum {
  usa = 'USA',
  china = 'CHINA',
  mexico = 'MEXICO',
}
export enum SortType {
  rating = 'RATING',
  vote = 'NUM_VOTE',
  year = 'YEAR',
}

export interface IFormInput {
  name: string;
  date: string;
  country: string;
  file: string;
  agree: string;
  agreeNotification: string;
}

export interface IFormPage {
  formCards: ICardForForm[];
  form: IFormInput;
  isDisabledSubmit: boolean;
}

export interface IInitialState {
  formPage: IFormPage;
  homePage: IHomePage;
}
const initialState: IInitialState = {
  formPage: {
    formCards: [],
    form: {
      name: '',
      date: '',
      country: '',
      file: '',
      agree: '',
      agreeNotification: '',
    },
    isDisabledSubmit: true,
  },
  homePage: {
    movies: [],
    currentMovie: {},
    searchInput: '',
    page: 1,
    pages: 0,
    sort: SortType.rating,
  },
};
const AppContext = createContext<{
  state: IInitialState;
  dispatch: Dispatch<FormPageActions | HomePageActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = (
  { formPage, homePage }: IInitialState,
  action: FormPageActions | HomePageActions
) => ({
  formPage: formReducer(formPage, action as FormPageActions),
  homePage: moviesReducer(homePage, action as HomePageActions),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
