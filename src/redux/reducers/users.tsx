import {UsersState} from "../../models/UsersState";
import {Action} from "../../models/Action";
import {User} from "../../models/User";

const initialState: UsersState = {
    users: [],
    organizations: [],
    search: {
        q: "",
        sort: "",
        order: ""
    }
};

export function users(state = initialState, action: Action<string, any>): UsersState {
    switch (action.type) {
        case "GET_SEARCH_SUCCESS":
            let users: Array<User> = [];
            let organizations: Array<User> = [];
            if(action.payload && action.payload.items) {
                let items: Array<User> = action.payload.items;
                users = items.filter(function (item: User) {
                    return (item.type === "User");
                });
                organizations = items.filter(function (item: User) {
                    return (item.type === "Organization");
                });
            }
            return {
                ...state,
                users: users,
                organizations: organizations
            };
        case "SEARCH_FORM":
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }

}
