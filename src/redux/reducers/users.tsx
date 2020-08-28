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
    },
    submittedSearch: {
        q: "",
        sort: "",
        order: ""
    },
    isLoading: {
        search: false
    },
    error: {
        search: ""
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
                organizations: organizations,
                isLoading: {
                    ...state.isLoading,
                    search: false
                },
                submittedSearch: state.search,
                error: {
                    ...state.error,
                    search: ""
                },
            };
        case "GET_SEARCH_FAILURE":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    search: false
                },
                error: {
                    ...state.error,
                    search: action.payload.message
                },
            };
        case "GET_SEARCH_REQUEST":
            return {
                ...state,
                isLoading: {
                    ...state.isLoading,
                    search: true
                }
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
