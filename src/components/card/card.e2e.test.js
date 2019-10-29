import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card';
Enzyme.configure({adapter: new Adapter()});

it(`callback function correct run`, () => {
  const onHover = jest.fn();
  const genrequestionscreen = shallow(<Card
    hoverHeandler={onHover}
    offers={[
      {
        title: `Beautiful & luxurious apartment at great location`,
        coast: 120,
        type: `Apartment`,
        isPremium: true,
        img: `img/apartment-01.jpg`
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
