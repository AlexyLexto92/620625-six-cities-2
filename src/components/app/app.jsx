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
  objectsForRent: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        coast: PropTypes.number,
        type: PropTypes.string,
        isPremium: PropTypes.bool,
        img: PropTypes.string
      })
  )
};
