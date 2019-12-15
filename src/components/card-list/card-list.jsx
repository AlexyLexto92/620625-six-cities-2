import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducers/userActions/userActions';
import {FilterType} from '../../reducers/userActions/userActions';

export class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  };
  handleHover(card) {
    this.props.changeActiveCard(card);
  }
  handleMouseOut() {
    this.props.changeActiveCard(-1);
  }

  render(){
    const {activeCard, offersPlace, city, filterType} =this.props;
    const offersCity = offersPlace.filter((offer) => offer.city.name === city);
      switch (filterType) {
        case FilterType.POPULAR:
          break;
        case FilterType.PRICE_ASC:
          offersCity.sort((a, b) =>
            a.price - b.price
          );
          break;
        case FilterType.PRICE_DESC:
          offersCity.sort((a, b) =>
            b.price - a.price);
          break;
        case FilterType.TOP:
          offersCity.sort((a, b) =>
            b.rating - a.rating);
          break;
      }
    
    return( <div className="cities__places-list places__list tabs__content">
        <Card
          handleHover={this.handleHover}
          handleMouseOut={this.handleMouseOut}
          offersCity={offersCity}
        />
      </div>

    )
  }

}
CardList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
  cityOffers: PropTypes.arrayOf(
    PropTypes.shape({})
  )
}

const mapStateToProps = (state) => { return {
  activeCard: state.userActions.activeCard,
  offersPlace: state.serverData.offersPlace,
  city: state.userActions.city,
  filterType: state.userActions.filterType,
}};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard: (activeCard) => dispatch(ActionCreator.changeActiveCard(activeCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);