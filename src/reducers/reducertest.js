import {
  ActionCreator,
  ActionType,
  FilterType,
  reducer,
  Operation
} from "../reducers/reducer";
import MockAdapter from 'axios-mock-adapter';
import offerTestObj from "../components/moks/mock-offer.js";
import {createAPI} from '../api.js';


it(`Action creator for changeCity returns correct action`, () => {
  expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  });
});

it(`Action creator for changeFilterType returns correct action`, () => {
  expect(ActionCreator.changeFilter(FilterType.POPULAR)).toEqual({
    type: ActionType.CHANGE_FILTER,
    payload: FilterType.POPULAR,
  });
});

it(`Action creator for changeActiveCard returns correct action`, () => {
  expect(ActionCreator.changeActiveCard(2)).toEqual({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: 2,
  });
});


it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: ``,
    cityOffers: [],
    cityFilterType: FilterType.POPULAR,
    activeCard: -1,
    offersPlace: [],
  });
});

it(`Reducer return right state after changing city`, () => {
  expect(reducer(undefined,
      {
        type: ActionType.CHANGE_CITY,
        payload: `Cologne`
      }
  )).toEqual({
    city: `Cologne`,
    cityOffers: offerTestObj.filter((offer) => offer.city === `Cologne`),
    cityFilterType: FilterType.POPULAR,
    activeCard: -1,
    offersPlace: [],
  });
});

it(`Reducer return right state after changing filterType`, () => {
  expect(reducer(undefined,
      {
        type: ActionType.CHANGE_FILTER,
        payload: FilterType.TOP,
      }
  )).toEqual({
    city: ``,
    cityOffers: [],
    cityFilterType: FilterType.TOP,
    activeCard: -1,
    offersPlace: [],
  });
});

it(`Reducer return right state after changing active card`, () => {
  expect(reducer(undefined,
      {
        type: ActionType.CHANGE_ACTIVE_CARD,
        payload: 100,
      }
  )).toEqual({
    city: ``,
    cityOffers: [],
    cityFilterType: FilterType.POPULAR,
    activeCard: 100,
    offersPlace: [],
  });
});
it(`server load data correct`, () => {
  const api = createAPI();
  const apiMock = new MockAdapter(api);
  const dispatch = jest.fn();
  const cityLoader = Operation.loadCityOffers();

  apiMock
.onGet(`/hotels`)
  .reply(200, [{fake: true}]);

  return cityLoader(dispatch, jest.fn(), api)
.then(()=>{
  expect(dispatch).toHaveBeenCalledTimes(3);
  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: ActionType.LOAD_CITYOFFERS,
    payload: [{fake: true}],
  });
});
});
