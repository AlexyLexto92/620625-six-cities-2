import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionCreator, FilterType} from '../../reducer.js';

export class SortList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    }
    this.heandlerClickHead = this.heandlerClickHead.bind(this);
  }
  heandlerClickHead() {
    this.setState({active: !this.state.active});
  }
  handleClickItem(filterType) {
    this.setState({active: false});
    this.props.changeFilterType(filterType);
  }
  render() {
    const {currentFilter, filters} = this.props;
    const {active} = this.state;
    const dropdownClass = active ? `places__options--opened` : ``;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0" onClick={this.heandlerClickHead}>
          {
            filters.find((filter) =>  filter.filterType === currentFilter).value
          }
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${dropdownClass}`}>
          {filters.map((filter, i) => (
            <li
              className={`places__option ${
                currentFilter === filter.filterType ? `places__option--active` : ``
                }`}
              key={`filter` + i}
              tabIndex="0"
              onClick={() => {
                this.handleClickItem(filter.filterType);
              }}
            >
              {filter.value}
            </li>
          ))}
        </ul>
      </form>)
  }

}

const mapStateToProps = (state) => {
  return {
    currentFilter: state.cityFilterType,
  }
};

const mapDispatchToProps = (dispatch) => ({
  changeFilterType: (city) => dispatch(ActionCreator.changeFilter(city))
});



export default connect(mapStateToProps, mapDispatchToProps)(SortList);