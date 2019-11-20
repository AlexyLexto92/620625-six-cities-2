import {
  ActionCreator,
  ActionType,
  reducer
} from "./reducer";
import {Offers} from "./components/moks/offers.js";


it(`Action creator for changeCity returns correct action`, () => {
  expect(ActionCreator.changeCity(`Amsterdam`)).toEqual({
    type: ActionType.CHANGE_CITY,
    payload: `Amsterdam`,
  });
});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    city: Offers[0].city,
    cityOffers: Offers.filter((offer) => offer.city === Offers[0].city),
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
    cityOffers: Offers.filter((offer) => offer.city === `Cologne`),
  });
});
