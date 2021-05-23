import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import quest from './quest';

export default combineReducers({
    alert,
    auth,
    quest
});