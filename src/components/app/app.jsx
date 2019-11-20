import React from 'react';
import PropTypes from 'prop-types';
import HomePage from '../home-page/home-page.jsx';
export const App = ({offers}) => {
  return <HomePage
    offers={offers}
  />;
};

App.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({})
  )
};
