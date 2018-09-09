import React from 'react';
import PropTypes from 'prop-types';

import './Template.css';

import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';

const Template = ({ children }) => (
  <div className="container">
    <Menu/>
    {children}
    <Footer/>
  </div>
);

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
