import React from 'react';
// import PropTypes from 'prop-types';
import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'

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
    <Footer />
    </React.Fragment>
  );
}

// .propTypes = {
//   : PropTypes.
// };

export default Layout ;
