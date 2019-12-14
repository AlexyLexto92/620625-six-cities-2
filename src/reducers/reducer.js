import {combineReducers} from 'redux';
import {reducer as serverData} from './dataLoad/dataLoad.js';
import {reducer as userActions} from './userActions/userActions.js';
const reducer = combineReducers({serverData, userActions});
export default reducer;
