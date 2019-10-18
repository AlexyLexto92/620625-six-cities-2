import React from 'react';
import PropTypes from 'prop-types';
import {HomePage} from './../home page/home_page.jsx';
export const App = (props) => {
  debugger
  const {objectsForRent} = props;
  return <HomePage
    objectsForRent={objectsForRent}
  />;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  coast: PropTypes.number.isRequired,
  type: PropTypes.oneOf([`Private room`, `Apartment`]),
  isPremium: PropTypes.bool,
};
