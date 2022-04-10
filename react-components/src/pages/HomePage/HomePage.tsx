import React, { Component } from 'react';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import { ICArdMovie } from '../../components/Card/Card';
import './HomePage.css';
import Preload from '../../components/Preload';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IPropsPage {}
interface IState {
  filterMovies: ICArdMovie[] | [];
  searchBarValue: string;
  loading: boolean;
}

class HomePage extends Component<IPropsPage, IState> {
  apiKey: string;
  constructor(props: IPropsPage) {
    super(props);
    this.apiKey = '73d7d196-9251-4b18-bfa4-0dfcf85206c2';
    this.state = {
      filterMovies: [],
      searchBarValue: localStorage.getItem('searchValue') || '',
      loading: false,
    };
  }
  async getData() {
    this.setState({ loading: true });
    const response = await fetch(
      `https://kinopoiskapiunofficial.tech/api/v2.2/films/?type=FILM&ratingFrom=0&ratingTo=10&yearFrom=2000&yearTo=3000&keyword=${this.state.searchBarValue}`,
      {
        method: 'GET',
        headers: { 'X-API-KEY': `${this.apiKey}`, 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();
    console.log(data.items);
    this.setState({ filterMovies: [...data.items], loading: false });
  }
  changeInputValue(value: string) {
    const searchValue = value;
    this.setState({ searchBarValue: searchValue });
    console.log(searchValue);
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchBarValue);
  }
  render() {
    return (
      <>
        <SearchBar
          searchBarValue={this.state.searchBarValue}
          changeInputValue={(value: string) => {
            this.changeInputValue.bind(this)(value);
          }}
          getData={this.getData.bind(this)}
        />
        <div className="Cards" data-testid="test">
          {this.state.loading ? (
            <Preload />
          ) : (
            this.state.filterMovies &&
            this.state.filterMovies.map((movie, index) => (
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
              />
            ))
          )}
        </div>
      </>
    );
  }
}

export { HomePage };
