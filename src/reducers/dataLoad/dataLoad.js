const initialState = {
  offersPlace: [],
};
const ActionType = {
  LOAD_CITYOFFERS: `LOAD_CITYOFFERS`,
};
const ActionCreator = {
  loadCityOffers: (offersPlace) => ({
    type: ActionType.LOAD_CITYOFFERS,
    payload: offersPlace,
  }),
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_CITYOFFERS:
      return Object.assign({}, state, {
        offersPlace: action.payload,
      });
  }
  return state;
};

export {
  ActionCreator,
  ActionType,
  reducer,
};
