import {combineReducers} from 'redux';
import {reducer as reducerDataApi} from './dataLoad/dataLoad.js';
import {reducer as reducerUserManual} from './userManual/userManual';
const reducer =  combineReducers({reducerDataApi, reducerUserManual});
export default reducer;