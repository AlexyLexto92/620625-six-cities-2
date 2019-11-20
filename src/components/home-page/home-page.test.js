import React from "react";
import renderer from "react-test-renderer";
import HomePage from "../home-page/home-page";
import {Offers} from "../moks/offers.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../../reducer";
jest.mock(`../map/map.jsx`);
it(`HomePage correctly renders after relaunch`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const tree = renderer
    .create(<Provider store={store}>
      <HomePage
        Offers={Offers}
        currentCity={Offers[0].city}
        cityOffers={Offers.filter((offer) => offer.city === Offers[0].city)}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
