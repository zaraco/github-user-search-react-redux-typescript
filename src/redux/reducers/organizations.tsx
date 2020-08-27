import {UsersState} from "../../models/UsersState";
import {Action} from "../../models/Action";
import {OrganizationsState} from "../../models/OrganizationsState";

const initialState: OrganizationsState = {
    organizations: []
};

export function organizations(state = initialState, action: Action<string, any>): OrganizationsState {
    switch (action.type) {
        case "GET_ORGANIZATIONS_SUCCESS":
            return {
                ...state,
                organizations: action.payload
            };
        default:
            return state;
    }

}
