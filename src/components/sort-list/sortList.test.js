import React from "react";
import renderer from "react-test-renderer";
import {SortList} from "./sortList";
import {FilterType} from '../../reducers/userActions/userActions';

it(`Filterlist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SortList
      currentFilter={`POPULAR`}
      changeFilterType={() => {}}
      filters={[
        {value: `Popular`, filterType: FilterType.POPULAR},
        {value: `Price: low to high`, filterType: FilterType.PRICE_ASC},
        {value: `Price: high to low`, filterType: FilterType.PRICE_DESC},
        {value: `Top rated first`, filterType: FilterType.TOP}
      ]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
