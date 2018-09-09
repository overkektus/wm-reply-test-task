import React from 'react';
import PropTypes from 'prop-types';

import Menu from './Menu/Menu';

const Template = ({ children }) => (
  <div>
    <Menu/>
    {children}
  </div>
);

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Template;
