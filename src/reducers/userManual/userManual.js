const FilterType = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DESC: `PRICE_DESC`,
  TOP: `TOP`
};

const initialState = {
  city: ``,
  cityOffers: [],
  cityFilterType: FilterType.POPULAR,
  activeCard: -1,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
  SHOW_CITY_LIST: `SHOW_CITY_LIST`,
  SHOW_CITY_OFFERS_LIST: `SHOW_CITY_OFFERS_LIST`,
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
  showCityOffersList: (offersPlace) => ({
    type: ActionType.SHOW_CITY_OFFERS_LIST,
    payload: offersPlace
  }),

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        cityOffers: state.offersPlace.filter((offer) => offer.city.name === action.payload),
      });
    case ActionType.CHANGE_FILTER:
      const cityOffersFiltered = state.offersPlace.filter((offer) => offer.city.name === state.city);
      switch (action.payload) {
        case FilterType.POPULAR:
          break;
        case FilterType.PRICE_ASC:
          cityOffersFiltered.sort((a, b) =>
            a.price - b.price
          );
          break;
        case FilterType.PRICE_DESC:
          cityOffersFiltered.sort((a, b) =>
            b.price - a.price);
          break;
        case FilterType.TOP:
          cityOffersFiltered.sort((a, b) =>
            b.rating - a.rating);
          break;
      }
      return Object.assign({}, state, {
        cityFilterType: action.payload,
        cityOffers: cityOffersFiltered
      });

    case ActionType.CHANGE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeCard: action.payload,
      });
    case ActionType.SHOW_CITY_LIST:
      return Object.assign({}, state, {
        city: action.payload[0].city.name,
      });
    case ActionType.SHOW_CITY_OFFERS_LIST:
      return Object.assign({}, state, {
        cityOffers: action.payload.filter((offer) => offer.city.name === action.payload[0].city.name),
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
