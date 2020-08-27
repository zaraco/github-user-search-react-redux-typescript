import {combineReducers} from 'redux';
import {users} from "./users";
import {organizations} from "./organizations";

export default combineReducers({
    users,
    organizations

});
