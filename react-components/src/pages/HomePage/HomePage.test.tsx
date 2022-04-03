import { render, screen } from '@testing-library/react';
import React from 'react';
import { HomePage } from './HomePage';

describe('home page', () => {
  it('render', () => {
    render(<HomePage />);
    screen.debug();
    expect(screen.getByTestId('test')).toBeInTheDocument();
  });
});
