import {
  ActionType,
} from "../dataLoad/dataLoad";
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import Operation from '../operations.js';
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
  expect(dispatch).toHaveBeenCalledTimes(2);
  expect(dispatch).toHaveBeenNthCalledWith(1, {
    type: ActionType.LOAD_CITYOFFERS,
    payload: [{fake: true}],
  });
});
});
