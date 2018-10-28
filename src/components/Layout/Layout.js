import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../HeaderFooter/Header'

const Layout = (props) => {
  const handleClick = () => {};

  return (
    <React.Fragment>
    <div onClick={handleClick}>
    <Header />
    footer
    </div>
    <main>
    {props.children}
    </main>
    </React.Fragment>
  );
}

// .propTypes = {
//   : PropTypes.
// };

export default Layout ;
