import React, { Component } from 'react';
import Card from '../../components/Card';
import { data } from '../../services/data';
import SearchBar from '../../components/SearchBar';
import { ICard } from '../../components/Card/Card';

interface IState {
  movies: ICard;
  filterMovies: ICard;
  searchBarValue: string;
}

class HomePage extends Component {
  state = {
    movies: [...data],
    filterMovies: [...data],
    searchBarValue: localStorage.getItem('searchValue') || '',
  };
  componentDidMount() {
    const newCards = this.state.movies.filter((movie) =>
      movie.nameRu?.toLowerCase().includes(this.state.searchBarValue)
    );
    this.setState({ filterMovies: newCards });
  }
  changeInputValue(value: string) {
    const searchValue = value;
    this.setState({ searchBarValue: searchValue });
    const newCards = this.state.movies.filter((movie) =>
      movie.nameRu?.toLowerCase().includes(value)
    );
    this.setState({ filterMovies: newCards });
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
        />
        <div className="Cards" data-testid="test">
          {this.state.filterMovies.map((movie) => (
            <Card
              key={movie.id}
              name={movie.nameRu}
              year={movie.year}
              ratingKinopoisk={movie.ratingKinopoisk}
              ratingImdb={movie.ratingImdb}
              posterUrlPreview={movie.posterUrlPreview}
            />
          ))}
        </div>
      </>
    );
  }
}

export { HomePage };
