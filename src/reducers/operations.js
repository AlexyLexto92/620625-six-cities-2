import {ActionCreator as ActionCreatorData} from './dataLoad/dataLoad';
import {ActionCreator as ActionCreatorActions} from './userActions/userActions';
const Operation = {
  loadCityOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreatorData.loadCityOffers(response.data));
        dispatch(ActionCreatorActions.showCityList(response.data));
      });
  },
};
export default Operation;
