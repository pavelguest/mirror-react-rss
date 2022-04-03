import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { SearchBar } from './SearchBar';

describe('searchBar', () => {
  it('render', () => {
    const ChangeInputValue = jest.fn((value) => {});

    const { getByPlaceholderText } = render(
      <SearchBar changeInputValue={ChangeInputValue} searchBarValue={''} />
    );

    const searchInput = getByPlaceholderText('Enter...') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'test' } });

    expect(searchInput.value).toBe('test');
  });
});
