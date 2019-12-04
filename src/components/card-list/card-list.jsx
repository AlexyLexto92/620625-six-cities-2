import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Card} from '../card/card.jsx';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';


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
    const {offersCity, activeCard} =this.props;
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
  activeCard: state.activeCard,
  offersCity: state.cityOffers,
}};

const mapDispatchToProps = (dispatch) => ({
  changeActiveCard: (activeCard) => dispatch(ActionCreator.changeActiveCard(activeCard))
});

export default connect(mapStateToProps, mapDispatchToProps)(CardList);