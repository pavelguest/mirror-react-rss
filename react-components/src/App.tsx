import React, { Component } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { AboutUsPage } from './Pages/AboutUsPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { HomePage } from './Pages/HomePage';

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <nav className="header__nav">
              <NavLink
                to="/"
                className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
              >
                About Us
              </NavLink>
              <NavLink
                to="/404"
                className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
              >
                404
              </NavLink>
            </nav>
          </header>
          <main className="App-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/404" element={<NotFoundPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
      </>
    );
  }
}

export default App;
