import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {HomePage} from './home_page';
Enzyme.configure({adapter: new Adapter()});

it(`onClick correct run afrer click`, () => {
  const clickHandler = jest.fn();
  const homePage = shallow(<HomePage
    rents={[{
      title: `Beautiful & luxurious apartment at great location`,
      coast: 120,
      type: `Apartment`,
      isPremium: true,
      img: `img/apartment-01.jpg`
    }]}
    onClickHead={clickHandler}
  />);
  const headLinck = homePage.find(`.header__logo-link`);
  headLinck.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
