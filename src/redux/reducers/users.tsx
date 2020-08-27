import {UsersState} from "../../models/UsersState";
import {Action} from "../../models/Action";

const initialState: UsersState = {
    users: []
};

export function users(state = initialState, action: Action<string, any>): UsersState {
    switch (action.type) {
        case "GET_USERS_SUCCESS":
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }

}
