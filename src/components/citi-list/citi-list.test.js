import React from "react";
import renderer from "react-test-renderer";
import {CitiList} from "../citi-list/citi-list.jsx";
import offerTestObj from '../moks/mock-offer.js';
import {getCityList} from '../../utils.js';
it(`Citylist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<CitiList
      startArray = {offerTestObj}
      offersCity = {offerTestObj}
      filteredCitysList = {getCityList(offerTestObj, 1)}
      currentCity = {offerTestObj[0].city.name}
      changeCity = {()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
