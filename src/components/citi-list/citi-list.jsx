import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer.js';
import PropTypes from 'prop-types';
import {getCityList} from '../../utils.js'

class CitiList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {Offers, currentCity, changeCity} = this.props;
    const filteredCitysList = getCityList(Offers, 6);
    return (<ul className="locations__list tabs__list">
      {filteredCitysList.map((city, index) => <li key={city + index}
        className="locations__item">
        <a className={`locations__item-link tabs__item
       ${city === currentCity ? `tabs__item--active` : ` `} `} href="#"
          onClick={(evt) => {
            evt.preventDefault();
            changeCity(city);
          }}
        ><span>
            {city}</span></a></li>
      )}
    </ul>)

  }
}
CitiList.propTypes = {
  Offers: PropTypes.arrayOf(
    PropTypes.shape({})
  ),
  currentCity: PropTypes.string,
  changeCity: PropTypes.func
}
const mapStateToProps = (state) => {
  return {
    currentCity: state.city,
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeCity: (city) => dispatch(ActionCreator.changeCity(city))
});

export {CitiList};

export default connect(mapStateToProps, mapDispatchToProps)(CitiList);