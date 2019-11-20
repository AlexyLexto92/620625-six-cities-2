import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card';
Enzyme.configure({adapter: new Adapter()});

it(`callback function correct run`, () => {
  const onHover = jest.fn();
  const genrequestionscreen = shallow(<Card
    hoverHeandler={onHover}
    cityOffers={ [
      {
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
    ]
    }
  />);
  const button = genrequestionscreen.find(`article`).first();
  button.simulate(`mouseenter`, {
    activeCardId: `0`
  });
  expect(onHover).toHaveBeenCalledWith({
    activeCardId: `0`
  });
});
