import {createAction} from "redux-api-middleware";
import {API_ENDPOINTS, API_HEADERS} from "../../config";
import {SearchPayload} from "../../models/SearchPayload";

export const actionGetSearch = (payload: SearchPayload) => {
    return createAction({
        types: ['GET_SEARCH_REQUEST', 'GET_SEARCH_SUCCESS', 'GET_SEARCH_FAILURE'],
        endpoint: () => API_ENDPOINTS.search(payload),
        method: 'GET',
        headers: API_HEADERS
    });
};
