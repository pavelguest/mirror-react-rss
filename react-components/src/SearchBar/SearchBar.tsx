import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    searchBarValue: localStorage.getItem('searchValue') || '',
  };
  changeInputValue(value: string) {
    const searchValue = value;
    this.setState({ searchBarValue: searchValue });
  }
  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchBarValue);
  }
  render() {
    return (
      <div>
        <label htmlFor="header-search"></label>
        <input
          value={this.state.searchBarValue}
          onChange={(event) => this.changeInputValue(event.target.value)}
          type="text"
          id="header-search"
          placeholder="Enter..."
          name="s"
        />
      </div>
    );
  }
}

export { SearchBar };
