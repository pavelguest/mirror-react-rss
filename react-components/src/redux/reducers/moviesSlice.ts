import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICArdMovie, IMovieCountries, IMovieGenres } from '../../components/Card/Card';

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
export enum SortType {
  rating = 'RATING',
  vote = 'NUM_VOTE',
  year = 'YEAR',
}

export interface IHomePage {
  movies: IMovieCards[];
  currentMovie: ICArdMovie;
  searchInput: string;
  page: number;
  pages: number;
  sort: string;
}
export interface IInitialState {
  homePage: IHomePage;
}
const initialState: IInitialState = {
  homePage: {
    movies: [],
    currentMovie: {},
    searchInput: '',
    page: 1,
    pages: 0,
    sort: SortType.rating,
  },
};

export const moviesSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
    getMovieCards(state, action: PayloadAction<IMovieCards[]>) {
      state.homePage.movies = action.payload;
    },
    getTotalPages(state, action: PayloadAction<number>) {
      state.homePage.pages = action.payload;
    },
    getMovieSearch(state, action: PayloadAction<string>) {
      state.homePage.searchInput = action.payload;
    },
    setCurrentMovie(state, action: PayloadAction<ICArdMovie>) {
      state.homePage.currentMovie = action.payload;
    },
    movieSort(state, action: PayloadAction<string>) {
      state.homePage.sort = action.payload;
    },
    resetPage(state) {
      state.homePage.page = 1;
    },
    setPrevPage(state) {
      state.homePage.page -= 1;
    },
    setNextPage(state) {
      state.homePage.page += 1;
    },
  },
});

export default moviesSlice.reducer;
