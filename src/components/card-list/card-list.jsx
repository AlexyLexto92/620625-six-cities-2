import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card.jsx';


export class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: `0`
    }

    this.hoverHeandler = this.hoverHeandler.bind(this);
  };

  static getCards(props, hoverHeandler) {
    const { offers } = props;
    return (
      <div className="cities__places-list places__list tabs__content">
        <Card
          hoverHeandler={hoverHeandler}
          offers={offers}
        />
      </div>
    );

  }
  render() {
    return CardList.getCards(this.props, this.hoverHeandler);
  };

  hoverHeandler(evt) {
    const id = evt.currentTarget.id;
    this.setState({activeCardId : id});
  };

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

