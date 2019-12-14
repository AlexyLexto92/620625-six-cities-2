const FilterType = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DESC: `PRICE_DESC`,
  TOP: `TOP`
};

const initialState = {
  city: ``,
  filterType: FilterType.POPULAR,
  activeCard: -1,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  SHOW_CITY_LIST: `SHOW_CITY_LIST`,
};


const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeFilter: (filter) => ({
    type: ActionType.CHANGE_FILTER,
    payload: filter,
  }),
  changeActiveCard: (activeCard) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: activeCard,
  }),
  showCityList: (offersPlace) => ({
    type: ActionType.SHOW_CITY_LIST,
    payload: offersPlace,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.CHANGE_FILTER:
      return Object.assign({}, state, {
        filterType: action.payload,
      });
    case ActionType.CHANGE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: action.payload,
      });
    case ActionType.SHOW_CITY_LIST:
      return Object.assign({}, state, {
        city: action.payload[0].city.name,
      });
  }
  return state;
};

export {
  ActionCreator,
  ActionType,
  FilterType,
  reducer,
};
