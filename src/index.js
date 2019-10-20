import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const init = () => {

  const rents = [
    {
      title: `Beautiful & luxurious apartment at great location`,
      coast: 120,
      type: `Apartment`,
      isPremium: true,
      img: `img/apartment-01.jpg`
    },
    {
      title: `Wood and stone place`,
      coast: 80,
      type: `Private room`,
      isPremium: false,
      img: `img/room.jpg`
    },
    {
      title: `Canal View Prinsengracht`,
      coast: 132,
      type: `Apartment`,
      isPremium: false,
      img: `img/apartment-02.jpg`
    },
    {
      title: `Nice, cozy, warm big bed apartment`,
      coast: 180,
      type: `Apartment`,
      isPremium: false,
      img: `img/apartment-03.jpg`
    },
    {
      title: `Wood and stone place`,
      coast: 80,
      type: `Private room`,
      isPremium: true,
      img: `img/room.jpg`
    }
  ];

  ReactDOM.render(<App
    rents={rents}
  />, document.querySelector(`#root`));
};
init();
