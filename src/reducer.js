import {Offers} from "./components/moks/offers";

const FilterType = {
  POPULAR: `POPULAR`,
  PRICE_ASC: `PRICE_ASC`,
  PRICE_DESC: `PRICE_DESC`,
  TOP: `TOP`
};

const initialState = {
  city: Offers[0].city,
  cityOffers: Offers.filter((offer) => offer.city === Offers[0].city),
  cityFilterType: FilterType.POPULAR,
  activeCard: -1,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_FILTER: `CHANGE_FILTER`,
  CHANGE_ACTIVE_CARD: `CHANGE_ACTIVE_CARD`,
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
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, {
        city: action.payload,
        cityOffers: Offers.filter((offer) => offer.city === action.payload)
      });
    case ActionType.CHANGE_FILTER:
      const cityOffersFiltered = Offers.filter((offer) => offer.city === state.city);
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
  }
  return state;
};
export {
  ActionCreator,
  ActionType,
  FilterType,
  reducer,
};
