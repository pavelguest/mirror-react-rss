import React, { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { ICArdMovie } from '../../components/Card/Card';
import './HomePage.css';
import Preload from '../../components/Preload';
import CardForApi from '../../components/CardForApi';
import { getData } from '../../services/kinopoiskServices';
import { AppContext } from '../../context';
import { Types } from '../../reducers';

const HomePage = () => {
  const [isLoadData, setIsLoadData] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState<ICArdMovie>({});
  const [errorMovies, setErrorMovies] = useState('');

  const { state, dispatch } = useContext(AppContext);

  const getMovies = async () => {
    setIsLoadData(true);
    const data = await getData(
      state.homePage.searchInput,
      state.homePage.page,
      state.homePage.sort
    );
    setIsLoadData(false);
    if (data?.message) {
      setErrorMovies(data.message);
    } else {
      dispatch({ type: Types.movieCards, payload: [...data.items] });
      dispatch({ type: Types.movieTotalPages, payload: data.totalPages });
    }
  };
  const changeInputValue = (value: string) => {
    dispatch({ type: Types.movieSearch, payload: value });
    dispatch({ type: Types.resetPage });
  };
  const prevPage = () => {
    if (state.homePage.page !== 1) dispatch({ type: Types.prevPage });
  };

  const nextPage = () => {
    if (state.homePage.page < state.homePage.pages) dispatch({ type: Types.nextPage });
  };
  const changeSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: Types.movieSort, payload: e.target.value });
  };
  useEffect(() => {
    getMovies();
  }, [state.homePage.sort, state.homePage.page]);
  const closeWindow = () => {
    setIsOpenModal(false);
  };
  return (
    <>
      <div className="home-page__inputs">
        <SearchBar
          searchBarValue={state.homePage.searchInput}
          changeInputValue={(value: string) => {
            changeInputValue.bind(this)(value);
          }}
          getData={getMovies}
        />
        <div className="sort__container">
          <select name="sort" id="sort-select" onChange={changeSort}>
            <option value="RATING">rating</option>
            <option value="NUM_VOTE">vote</option>
            <option value="YEAR">year</option>
          </select>
        </div>
      </div>
      <div className="Cards__pagination">
        <button onClick={prevPage} id="prev-page">
          prev
        </button>
        <span>
          {state.homePage.page} / {state.homePage.pages}
        </span>
        <button onClick={nextPage} id="next-page">
          next
        </button>
      </div>
      <div className="Cards" data-testid="test">
        {isLoadData ? (
          <Preload />
        ) : errorMovies ? (
          <div>{errorMovies}</div>
        ) : (
          state.homePage.movies &&
          state.homePage.movies.map((movie, index) => (
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
