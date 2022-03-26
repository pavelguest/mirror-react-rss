import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/404">404</Link>
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
