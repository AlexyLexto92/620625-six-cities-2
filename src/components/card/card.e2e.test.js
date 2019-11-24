import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card.jsx';
Enzyme.configure({adapter: new Adapter()});
it(`Info about active card is correct on hover`, () => {
  const handleHover = jest.fn();
  const handleMouseOut = jest.fn();
  const card = shallow(<Card
    cityOffers={
      [{
        id: 1,
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
    handleHover = {handleHover}
    handleMouseOut = {handleMouseOut}
  />);
  const article = card.find(`.place-card`);
  article.simulate(`mouseenter`);
  expect(handleHover).toHaveBeenCalledWith(1);
  article.simulate(`mouseleave`);
  expect(handleMouseOut).toHaveBeenCalledTimes(1);
});
