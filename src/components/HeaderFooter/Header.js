import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = (props) => {
  const handleClick = () => {};
  return (
    <header>
    <div className="top-bar">
      <div class="logo">
      LOGO
      </div>
      <div class="menu">
      <Link to="/team">
        <button>The team</button>
      </Link>
      <Link to="/matches">
        <button>Matches</button>
      </Link>
      </div>
    </div>
    </header>

  );
}

// Header.propTypes = {
//   : PropTypes.
// };

export default Header;
