import React, { Component } from 'react';
import { Card } from '../Card/Card';
import { data } from '../data';
import { SearchBar } from '../SearchBar/SearchBar';

class HomePage extends Component {
  state = {
    movies: [...data],
  };
  render() {
    return (
      <>
        <SearchBar />
        <div className="Cards">
          {this.state.movies.map((movie, index) => {
            return (
              <Card
                key={index}
                name={movie.nameRu}
                year={movie.year}
                ratingKinopoisk={movie.ratingKinopoisk}
                ratingImdb={movie.ratingImdb}
                posterUrlPreview={movie.posterUrlPreview}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export { HomePage };
