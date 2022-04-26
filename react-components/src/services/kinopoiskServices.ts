import axios from 'axios';
import { API_KEY } from '../constants/constantApi';

const getData = async (searchValue: string, page: number, sort: string) => {
  try {
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=3000&page=${page}&order=${sort}&keyword=${searchValue}`,
      {
        headers: { 'X-API-KEY': `${API_KEY}`, 'Content-Type': 'application/json' },
      }
    );
    const data = await response.data;
    return data;
  } catch (error) {
    const resultError = error as Error;
    return resultError;
  }
};

export { getData };
