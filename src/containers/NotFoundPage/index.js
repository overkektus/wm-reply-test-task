import React, { Component } from 'react';

import './NotFoundPage.css';

import tubeLogo from '../../assets/london-tube-logo.png';

class NotFoundPage extends Component {
  render = () => {
    return(
      <div className="not-found-page">
        <h1 className="hidden">404 page not found</h1>
        <div className="not-found-wrapper">
          <p className="not-found-page__number">4</p>
          <img src={tubeLogo} className="not-found__logo"/>
          <p className="not-found-page__number">4</p>
        </div>
        <h2 className="not-found-page__message">Sorry, Page Not Found</h2>
      </div>
    );
  }
}

export default NotFoundPage;
