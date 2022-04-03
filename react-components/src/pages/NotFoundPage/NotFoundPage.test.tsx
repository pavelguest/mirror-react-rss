import { render, screen } from '@testing-library/react';
import React from 'react';
import { NotFoundPage } from './NotFoundPage';
describe('not found page', () => {
  it('render', () => {
    render(<NotFoundPage />);
    screen.debug();
    expect(screen.getByText(/Page/i)).toBeInTheDocument();
  });
});
