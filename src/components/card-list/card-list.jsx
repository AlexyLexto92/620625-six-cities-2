import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card.jsx';
import {connect} from 'react-redux';


export class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: `0`
    }

    this.hoverHeandler = this.hoverHeandler.bind(this);
  };

  static getCards(props, hoverHeandler) {
    const { offers, cityOffers } = props;
    return (
      <div className="cities__places-list places__list tabs__content">
        <Card
          hoverHeandler={hoverHeandler}
          offers={offers}
          cityOffers={cityOffers}
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
    PropTypes.shape({})
  ),
  cityOffers: PropTypes.arrayOf(
    PropTypes.shape({})
  )
}

const mapStateToProps = (state) => {return {
  cityOffers: state.cityOffers,
}};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);