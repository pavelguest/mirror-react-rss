import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { API_KEY } from '../constants/constantApi';
import { IPropsApi } from '../types/kinopoiskServicerTypes';

export const fetchMovies = createAsyncThunk(
  'Movies/fetchData',
  async (props: IPropsApi, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=3000&page=${props.page}&order=${props.sort}&keyword=${props.searchInput}`,
        {
          headers: { 'X-API-KEY': `${API_KEY}`, 'Content-Type': 'application/json' },
        }
      );
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('не удалось загрузить фильмы');
    }
  }
);
