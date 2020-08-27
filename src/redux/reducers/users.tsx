import {UsersState} from "../../models/UsersState";
import {Action} from "../../models/Action";

const initialState: UsersState = {
    users: [],
    usersSearchResponse: null
};

export function users(state = initialState, action: Action<string, any>): UsersState {
    switch (action.type) {
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload
            };
        case "SEARCH_USERS_SUCCESS":
            return {
                ...state,
                usersSearchResponse: action.payload
            };
        default:
            return state;
    }

}
