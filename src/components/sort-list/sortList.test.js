import React from "react";
import renderer from "react-test-renderer";
import {SortList} from "./sortList";

it(`Filterlist correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<SortList
      currentFilter={`POPULAR`}
      changeFilterType={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
