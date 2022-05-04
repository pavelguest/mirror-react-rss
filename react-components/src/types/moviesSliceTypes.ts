import { ICArdMovie, IMovieCountries, IMovieGenres } from '../components/Card/Card';

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
export interface IGetDataApi {
  items: IMovieCards[];
  totalPages: string;
}
export enum SortType {
  rating = 'RATING',
  vote = 'NUM_VOTE',
  year = 'YEAR',
}

interface IStatusApi {
  isLoading: boolean;
  error: string;
}
export interface IHomePage {
  movies: IMovieCards[];
  currentMovie: ICArdMovie;
  searchInput: string;
  page: number;
  pages: number;
  sort: string;
  statusApi: IStatusApi;
}
export interface IInitialState {
  homePage: IHomePage;
}
