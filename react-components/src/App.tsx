import React, { useContext } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import AboutUsPage from './pages/AboutUsPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import CardForApi from './components/CardForApi';
import { AppContext } from './context';

const App = () => {
  const { state } = useContext(AppContext);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav className="header__nav">
            <NavLink to="/" className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}>
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
            >
              About Us
            </NavLink>
            <NavLink
              to="/forms"
              className={({ isActive }) => 'nav__link' + (isActive ? ' active' : '')}
            >
              Forms
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
            <Route path="/forms" element={<FormPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route
              path="/card-info"
              element={<CardForApi currentMovie={state.homePage.currentMovie} />}
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
