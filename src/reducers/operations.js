import {ActionCreator as ActionCreatorData} from './dataLoad/dataLoad';
import {ActionCreator as ActionCreatorManual} from './userManual/userManual';
const Operation = {
  loadCityOffers: () => (dispatch, _getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreatorData.loadCityOffers(response.data));
        dispatch(ActionCreatorManual.showCityList(response.data));
        dispatch(ActionCreatorManual.showCityOffersList(response.data));
      });
  },
};
export default Operation;