import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { ICArdMovie } from '../../components/Card/Card';
import './HomePage.css';
import Preload from '../../components/Preload';
import CardForApi from '../../components/CardForApi';
import axios from 'axios';

const API_KEY = '73d7d196-9251-4b18-bfa4-0dfcf85206c2';

const HomePage = () => {
  const [filterMovies, setFilterMovies] = useState<ICArdMovie[] | []>([]);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [isLoadData, setIsLoadData] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<ICArdMovie>({});

  const getData = async () => {
    setIsLoadData(true);
    const response = await axios.get(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=3000&keyword=${searchValue}`,
      {
        headers: { 'X-API-KEY': `${API_KEY}`, 'Content-Type': 'application/json' },
      }
    );
    try {
      const data = await response.data;
      setIsLoadData(false);
      setFilterMovies([...data.items]);
    } catch {
      console.log('error');
    }
  };
  const changeInputValue = (value: string) => {
    setSearchValue(value);
  };
  const closeWindow = () => {
    setIsOpenModal(false);
  };
  useEffect(() => {
    localStorage.setItem('searchValue', searchValue);
  }, [searchValue]);
  return (
    <>
      <SearchBar
        searchBarValue={searchValue}
        changeInputValue={(value: string) => {
          changeInputValue.bind(this)(value);
        }}
        getData={getData.bind(this)}
      />
      <div className="Cards" data-testid="test">
        {isLoadData ? (
          <Preload />
        ) : (
          filterMovies &&
          filterMovies.map((movie, index) => (
            <Card
              key={index}
              countries={movie.countries}
              genres={movie.genres}
              imdbId={movie.imdbId}
              kinopoiskId={movie.kinopoiskId}
              nameEn={movie.nameEn}
              nameOriginal={movie.nameOriginal}
              nameRu={movie.nameRu}
              posterUrl={movie.posterUrl}
              posterUrlPreview={movie.posterUrlPreview}
              ratingImdb={movie.ratingImdb}
              ratingKinopoisk={movie.ratingKinopoisk}
              type={movie.type}
              year={movie.year}
              openCard={() => {
                setCurrentMovie({ ...movie });
                setIsOpenModal(true);
              }}
            />
          ))
        )}
      </div>
      <CardForApi
        modalWindow={isOpenModal}
        currentMovie={currentMovie}
        closeWindow={() => closeWindow()}
      />
    </>
  );
};

export { HomePage };
