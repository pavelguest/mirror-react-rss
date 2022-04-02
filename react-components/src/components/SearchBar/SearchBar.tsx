import React, { Component, FunctionComponent } from 'react';
import './SearchBar.css';

interface ISearchBar {
  searchBarValue: string;
  changeInputValue: (value: string) => void;
}

const SearchBar: FunctionComponent<ISearchBar> = ({ changeInputValue, searchBarValue }) => {
  return (
    <div>
      <label htmlFor="header-search"></label>
      <input
        value={searchBarValue}
        onChange={(event) => changeInputValue(event.target.value)}
        type="text"
        id="header-search"
        placeholder="Enter..."
        name="s"
      />
    </div>
  );
};

export { SearchBar };
