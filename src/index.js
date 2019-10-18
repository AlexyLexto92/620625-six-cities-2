import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {

  const objectsForRent = [
    {
      title: `Beautiful & luxurious apartment at great location`,
      coast: 120,
      type: `Apartment`,
      isPremium: true,
    },
    {
      title: `Wood and stone place`,
      coast: 80,
      type: `Private room`,
      isPremium: false,
    },
    {
      title: `Canal View Prinsengracht`,
      coast: 132,
      type: `Apartment`,
      isPremium: false,
    },
    {
      title: `Nice, cozy, warm big bed apartment`,
      coast: 180,
      type: `Apartment`,
      isPremium: false,
    },
    {
      title: `Wood and stone place`,
      coast: 80,
      type: `Private room`,
      isPremium: true,
    }
  ];

  ReactDOM.render(<App
    objectsForRent={objectsForRent}
  />, document.querySelector(`#root`));
};
init();
