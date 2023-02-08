import React from 'react';
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom';
import {Home, About, Portfolio, Contact, SiteMap} from './views/index';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="app-header">
          <div className="app-header__top">
            <h1>React.js</h1>
          </div>
          <div className="app-header__btm">
            <nav className="app-header__nav">
              <NavLink to="/" className={({isActive}) => 'nav-link' + (isActive ? ' on' : '')}>
                Home
              </NavLink>
              <NavLink to="/About" className={({isActive}) => 'nav-link' + (isActive ? ' on' : '')}>
                About
              </NavLink>
              <NavLink to="/Portfolio" className={({isActive}) => 'nav-link' + (isActive ? ' on' : '')}>
                Portfolio
              </NavLink>
              <NavLink to="/Contact" className={({isActive}) => 'nav-link' + (isActive ? ' on' : '')}>
                Contact
              </NavLink>
              <NavLink to="/SiteMap" className={({isActive}) => 'nav-link' + (isActive ? ' on' : '')}>
                Site Map
              </NavLink>
            </nav>
          </div>
        </header>
        <div className="app-content">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/About" exact element={<About />}></Route>
            <Route path="/Portfolio" exact element={<Portfolio />}></Route>
            <Route path="/Contact" exact element={<Contact />}></Route>
            <Route path="/SiteMap" exact element={<SiteMap />}></Route>
          </Routes>
        </div>
        <footer className="app-footer">
          COPYRIGHT <b>ⓒ양정연</b> 2023 ALL RIGHTS RESERVED.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
