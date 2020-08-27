import {createAction} from "redux-api-middleware";
import {API_ENDPOINTS, API_HEADERS} from "../../config";

export const actionGetUsers = () => {
    return createAction({
        types: ['GET_USERS_REQUEST', 'GET_USERS_SUCCESS', 'GET_USERS_FAILURE'],
        endpoint: () => API_ENDPOINTS.users,
        method: 'GET',
        headers: API_HEADERS
    });
};
