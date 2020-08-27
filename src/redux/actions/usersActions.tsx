import {createAction} from "redux-api-middleware";
import {API_ENDPOINTS, API_HEADERS} from "../../config";
import {SearchPayload} from "../../models/SearchPayload";

export const actionGetUsers = () => {
    return createAction({
        types: ['GET_USERS_REQUEST', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE'],
        endpoint: () => API_ENDPOINTS.users,
        method: 'GET',
        headers: API_HEADERS
    });
};

export const actionSearchUsers = (payload: SearchPayload) => {
    return createAction({
        types: ['SEARCH_USERS_REQUEST', 'SEARCH_USERS_SUCCESS', 'SEARCH_USERS_FAILURE'],
        endpoint: () => API_ENDPOINTS.searchUsers(payload),
        method: 'GET',
        headers: API_HEADERS
    });
};
