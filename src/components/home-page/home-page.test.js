import React from "react";
import renderer from "react-test-renderer";
import HomePage from "../home-page/home-page";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../../reducer";
import offerTestObj from '../moks/mock-offer.js';
jest.mock(`../map/map.jsx`);
it(`HomePage correctly renders after relaunch`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const tree = renderer
    .create(<Provider store={store}>
      <HomePage
        Offers={offerTestObj}
        currentCity={offerTestObj[0].city.name}
        cityOffers={offerTestObj.filter((offer) => offer.city === offerTestObj[0].city.name)}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
