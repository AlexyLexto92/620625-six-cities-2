import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './../card/card';

export const CardList = ({offers}) => {
  const {offers} = offers;
  this.state = {
      title: `Beautiful & luxurious apartment at great location`,
      coast: 120,
      type: `Apartment`,
      isPremium: true,
      img: `img/apartment-01.jpg`
    }

  return (
    <div className="cities__places-list places__list tabs__content">
     {offers.map((item, index) => (
                <Card
                  index = {index}
                  item = {item}
                />))}
    </div>
  );
  ;
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      coast: PropTypes.number,
      type: PropTypes.string,
      isPremium: PropTypes.bool,
      img: PropTypes.string
    })
  )
}

