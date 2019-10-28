import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';
import {offers} from './components/moks/offers';

const init = (rentOffers) => {
  ReactDOM.render(<App
 offers = {rentOffers}
  />, document.querySelector(`#root`));
};
init(offers);
