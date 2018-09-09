import React from 'react';

import './Footer.css';

import githubIcon from '../../assets/github-sign.svg';
import linkedinIcon from '../../assets/linkedin-sign.svg';

const Footer = () => (
  <footer className="footer">
    <p className="footer__author">Egor Piskunov</p>
    <ul className="footer__socials">
      <li className="footer__socials-item">
        <a href="#">
          <img src={githubIcon} className="footer__socials-icon" alt="icon github"/>
        </a>
      </li>
      <li className="footer__socials-item">
        <a href="#">
          <img src={linkedinIcon} className="footer__socials-icon" alt="icon linkedin"/>
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
