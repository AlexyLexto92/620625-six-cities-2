import React from "react";
import renderer from "react-test-renderer";
import {CitiList} from "../citi-list/citi-list.jsx";
import {Offers} from "../moks/offers.js";
import {getCityList} from '../../utils.js';
it(`Citylist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CitiList
      Offers = {Offers}
      filteredCitysList = {getCityList(Offers, 6)}
      currentCity = {Offers[0].city}
      changeCity = {()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
