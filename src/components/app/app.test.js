import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<App
    rents={[{
      title: `Beautiful & luxurious apartment at great location`,
      coast: 120,
      type: `Apartment`,
      isPremium: true,
      img: `img/apartment-01.jpg`
    }]}
    onClick={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
