import {fromJS} from 'immutable'
import { combineReducers } from 'redux-immutable';
const dbList = (state = fromJS({}), action) => {
    const {type, payload} = action;
    switch(type) {
        case 'fetch-db-success':
            return fromJS(payload);
        case 'fetch-db-failure':
            return fromJS({});
        default:
            return state;
    }
}
export default combineReducers({
    dbList
})