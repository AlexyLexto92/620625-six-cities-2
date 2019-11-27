import React from 'react';
import renderer from 'react-test-renderer';
import {Card} from './card';

it(`WelcomeScreen correctly renders after relaunch`, () => {
  const tree = renderer.create(<Card
    cityOffers={
      [{
        id: 0,
        mark: `Premium`,
        image: `img/apartment-01.jpg`,
        price: 120,
        bookmark: false,
        rating: 93,
        name: `Beautiful & luxurious apartment at great location`,
        type: `Apartment`,
        ratingNumber: 4.8,
        placeType: `Entire place`,
        bedrooms: 3,
        maxAdults: 4,
        inside: [
          `Wi-Fi`,
          `Washing machine`,
          `Towels`,
          `Heating`,
          `Coffee machine`,
          `Baby seat`,
          `Kitchen`,
          `Dishwasher`,
          `Cabel TV`,
          `Fridge`
        ],
        hostName: `Angelina`,
        hostLevel: `Pro`,
        city: `Amsterdam`,
        coordinates: [52.3909553943508, 4.85309666406198],
        description: [`
                    A quiet cozy and picturesque that hides behind a a river by the
                    unique lightness of Amsterdam. The building is green and from
                    18th century`, `An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                 `]
      }
      ]}

    hoverHeandler={jest.fn()}
  />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
