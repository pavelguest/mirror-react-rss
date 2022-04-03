import { render, screen } from '@testing-library/react';
import React from 'react';
import { AboutUsPage } from './AboutUsPage';

describe('about page', () => {
  it('render', () => {
    render(<AboutUsPage />);
    screen.debug();
    expect(screen.getByText(/About Page/i)).toBeInTheDocument();
  });
});
