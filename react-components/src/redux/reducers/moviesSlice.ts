import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICArdMovie } from '../../components/Card/Card';
import { fetchMovies } from '../../services/kinopoiskServices';
import { IGetDataApi, IInitialState, SortType } from '../../types/moviesSliceTypes';

const initialState: IInitialState = {
  homePage: {
    movies: [],
    currentMovie: {},
    searchInput: '',
    page: 1,
    pages: 0,
    sort: SortType.rating,
    statusApi: {
      isLoading: false,
      error: '',
    },
  },
};

export const moviesSlice = createSlice({
  name: 'Movies',
  initialState,
  reducers: {
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
  extraReducers: {
    [fetchMovies.fulfilled.type]: (state, action: PayloadAction<IGetDataApi>) => {
      state.homePage.statusApi.isLoading = false;
      state.homePage.statusApi.error = '';
      state.homePage.movies = action.payload.items;
      state.homePage.pages = +action.payload.totalPages;
    },
    [fetchMovies.pending.type]: (state) => {
      state.homePage.statusApi.isLoading = true;
    },
    [fetchMovies.rejected.type]: (state, action: PayloadAction<string>) => {
      state.homePage.statusApi.isLoading = false;
      state.homePage.statusApi.error = action.payload;
    },
  },
});

export default moviesSlice.reducer;
