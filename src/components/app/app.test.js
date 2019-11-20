import React from "react";
import renderer from "react-test-renderer";
import {App} from "../app/app.jsx";
import {Offers} from "../moks/offers.js";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {reducer} from "../../reducer";
jest.mock(`../map/map.jsx`);
it(`App correctly renders after relaunch`, () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  );
  const tree = renderer
    .create(<Provider store={store}>
      <App
        cityOffers={Offers}
      />
    </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
