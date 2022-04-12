import React, { Component, FunctionComponent } from 'react';
import './SearchBar.css';

interface ISearchBar {
  searchBarValue: string;
  changeInputValue: (value: string) => void;
  getData: () => void;
}

const SearchBar: FunctionComponent<ISearchBar> = ({
  changeInputValue,
  searchBarValue,
  getData,
}) => {
  return (
    <div>
      <label htmlFor="header-search"></label>
      <input
        value={searchBarValue}
        onChange={(event) => changeInputValue(event.target.value)}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            getData();
          }
        }}
        type="text"
        id="header-search"
        placeholder="Enter..."
        name="s"
        data-testid="search-input"
      />
      <button className="button__search" onClick={getData} data-testid="search-button">
        search
      </button>
    </div>
  );
};

export { SearchBar };
