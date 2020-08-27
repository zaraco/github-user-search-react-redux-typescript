import {UsersState} from "../../models/UsersState";
import {Action} from "../../models/Action";
import {User} from "../../models/User";

const initialState: UsersState = {
    users: [],
    organizations: []
};

export function users(state = initialState, action: Action<string, any>): UsersState {
    switch (action.type) {
        case "GET_SEARCH_SUCCESS":
            let items: Array<User> = action.payload.items;
            let users = items.filter(function(item : User) {
                return (item.type === "User");
            });
            let organizations = items.filter(function(item : User) {
                return (item.type === "Organization");
            });
            return {
                ...state,
                users: users,
                organizations: organizations
            };
        default:
            return state;
    }

}
