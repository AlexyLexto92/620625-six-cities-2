import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';
import offerTestObj from '../moks/mock-offer.js';


it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<Card
    offersCity={offerTestObj}
    hoverHeandler={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
