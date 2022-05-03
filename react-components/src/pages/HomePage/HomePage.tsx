import React, { useEffect, useState } from 'react';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import './HomePage.css';
import Preload from '../../components/Preload';
import { getData } from '../../services/kinopoiskServices';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { moviesSlice } from '../../redux/reducers/moviesSlice';

const HomePage = () => {
  const [isLoadData, setIsLoadData] = useState(false);
  const [errorMovies, setErrorMovies] = useState('');

  const { homePage } = useAppSelector((state) => state.homeReducer);
  const {
    getMovieCards,
    getTotalPages,
    getMovieSearch,
    setCurrentMovie,
    resetPage,
    setNextPage,
    setPrevPage,
    movieSort,
  } = moviesSlice.actions;
  const dispatch = useAppDispatch();

  const getMovies = async () => {
    setIsLoadData(true);
    const data = await getData(homePage.searchInput, homePage.page, homePage.sort);
    setIsLoadData(false);
    if (data?.message) {
      setErrorMovies(data.message);
    } else {
      dispatch(getMovieCards([...data.items]));
      dispatch(getTotalPages(data.totalPages));
    }
  };
  const changeInputValue = (value: string) => {
    dispatch(getMovieSearch(value));
    dispatch(resetPage());
  };
  const prevPage = () => {
    if (homePage.page !== 1) dispatch(setPrevPage());
  };

  const nextPage = () => {
    if (homePage.page < homePage.pages) dispatch(setNextPage());
  };
  const changeSort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(movieSort(e.target.value));
  };
  useEffect(() => {
    getMovies();
  }, [homePage.sort, homePage.page]);

  return (
    <>
      <div className="home-page__inputs">
        <SearchBar
          searchBarValue={homePage.searchInput}
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
          {homePage.page} / {homePage.pages}
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
          homePage.movies &&
          homePage.movies.map((movie, index) => (
            <Link to={'../card-info'} key={index}>
              {' '}
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
                  dispatch(setCurrentMovie(movie));
                }}
              />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export { HomePage };
