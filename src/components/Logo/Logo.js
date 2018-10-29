import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

import fcbLogo from '../../assets/images/fcb-logo.png'

const logo = (props) => (
  <div className="logo">
  <Link to="/">
    <img src={fcbLogo} />
  </Link>
  </div>
);

export default logo;
