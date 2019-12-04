import React from "react";
import renderer from "react-test-renderer";
import {Map} from "../map/map.jsx";
import offerTestObj from '../moks/mock-offer.js';
it(`Map correctly renders after relaunch`, () => {
  const tree = renderer
    .create(< Map Offers={offerTestObj}
      cityOffers={offerTestObj}
      cityMap={
        [52.3709553943508, 4.89309666406198]}
      iconSizeMap={
        [30, 30]}
      iconUrlMap={`img/pin.svg`}
    />).toJSON();
  expect(tree).toMatchSnapshot();
});
