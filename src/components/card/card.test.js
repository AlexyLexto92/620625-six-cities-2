import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<Card
    cityOffers={[
      {
        title: `Beautiful & luxurious apartment at great location`,
        coast: 120,
        type: `Apartment`,
        isPremium: true,
        img: `img/apartment-01.jpg`
      }]}

    hoverHeandler={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
