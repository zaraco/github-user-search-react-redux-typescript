import {createAction} from "redux-api-middleware";
import {API_ENDPOINTS, API_HEADERS} from "../../config";


export const actionGetOrganizations = () => {
    return createAction({
        types: ['GET_ORGANIZATIONS_REQUEST', 'GET_ORGANIZATIONS_SUCCESS', 'GET_ORGANIZATIONS_FAILURE'],
        endpoint: () => API_ENDPOINTS.users,
        method: 'GET',
        headers: API_HEADERS
    });
};
