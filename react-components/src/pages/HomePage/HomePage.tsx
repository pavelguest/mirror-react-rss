import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { ICArdMovie } from '../../components/Card/Card';
import './HomePage.css';
import Preload from '../../components/Preload';
import CardForApi from '../../components/CardForApi';
import { getData } from '../../services/kinopoiskServices';

const HomePage = () => {
  const [filterMovies, setFilterMovies] = useState<ICArdMovie[] | []>([]);
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [isLoadData, setIsLoadData] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<ICArdMovie>({});
  const [errorMovies, setErrorMovies] = useState('');

  const getMovies = async () => {
    setIsLoadData(true);
    const data = await getData(searchValue);
    setIsLoadData(false);
    if (data?.message) {
      setErrorMovies(data.message);
    } else {
      setFilterMovies([...data.items]);
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
        getData={getMovies}
      />
      <div className="Cards" data-testid="test">
        {isLoadData ? (
          <Preload />
        ) : errorMovies ? (
          <div>{errorMovies}</div>
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
