
import React from 'react';
import renderer from 'react-test-renderer';
import {HomePage} from './home-page';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<HomePage
    offers = {[
      {
        title: `Beautiful & luxurious apartment at great location`,
        coast: 120,
        type: `Apartment`,
        isPremium: true,
        img: `img/apartment-01.jpg`
      },
      {
        title: `Wood and stone place`,
        coast: 80,
        type: `Private room`,
        isPremium: false,
        img: `img/room.jpg`
      },
      {
        title: `Canal View Prinsengracht`,
        coast: 132,
        type: `Apartment`,
        isPremium: false,
        img: `img/apartment-02.jpg`
      },
      {
        title: `Nice, cozy, warm big bed apartment`,
        coast: 180,
        type: `Apartment`,
        isPremium: false,
        img: `img/apartment-03.jpg`
      }
    ]}
    onClick={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
