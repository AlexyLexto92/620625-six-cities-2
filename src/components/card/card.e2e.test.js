import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Card} from './card.jsx';
import offerTestObj from '../moks/mock-offer.js';
Enzyme.configure({adapter: new Adapter()});
it(`Info about active card is correct on hover`, () => {
  const handleHover = jest.fn();
  const handleMouseOut = jest.fn();
  const card = shallow(<Card
    offersCity={offerTestObj}
    handleHover = {handleHover}
    handleMouseOut = {handleMouseOut}
  />);
  const article = card.find(`.place-card`);
  article.simulate(`mouseenter`);
  expect(handleHover).toHaveBeenCalledWith(1);
  article.simulate(`mouseleave`);
  expect(handleMouseOut).toHaveBeenCalledTimes(1);
});
