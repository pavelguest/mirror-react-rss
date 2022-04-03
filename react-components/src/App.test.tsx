import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('render home page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    screen.debug();
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
  it('should about us page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/about/i));
    const page = screen.getByText(/about page/i);
    expect(page).toBeInTheDocument();
  });
  it('should about us page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    fireEvent.click(screen.getByText(/404/i));
    const page = screen.getByText(/page not found/i);
    expect(page).toBeInTheDocument();
  });
});
