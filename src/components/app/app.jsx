import React from 'react';
import PropTypes from 'prop-types';
import {HomePage} from '../home-page/home-page.jsx';
export const App = ({offers}) => {
  return <HomePage
    offers={offers}
  />;
};

App.propTypes = {
  rents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      coast: PropTypes.number,
      type: PropTypes.string,
      isPremium: PropTypes.bool,
      img: PropTypes.string
    })
  )
};
