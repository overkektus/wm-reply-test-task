import React from 'react';
import { Link } from 'react-router-dom';

import tubeLogo from '../../assets/london-tube-logo.png';

import './Menu.css';

const Menu = () => (
  <nav className="menu">
    <ul className="menu__list">
      <li className="menu__item">
        <Link to="/">
          <div className="menu__tube-logo-wrapper">
            <img className="menu__tube-logo" src={tubeLogo}/>
          </div>
        </Link>
      </li>
      <li className="menu__item">
        <Link to="/" className="menu__link">Home</Link>
      </li>
      <li className="menu__item">
        <Link to="/stations" className="menu__link">Stations</Link>
      </li>
      <li className="menu__item">
        <Link to="/planner" className="menu__link">Planner</Link>
      </li>
      <li className="menu__item">
        <Link to="/info" className="menu__link">Info</Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
