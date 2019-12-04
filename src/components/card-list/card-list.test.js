import React from 'react';
import renderer from 'react-test-renderer';
import {CardList} from './card-list';
import offerTestObj from '../moks/mock-offer.js';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<CardList
    offersCity={offerTestObj}
    onClick={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
