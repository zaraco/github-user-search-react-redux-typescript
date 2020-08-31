import {createAction} from "redux-api-middleware";
import {API_ENDPOINTS, API_HEADERS} from "../../config";
import {SearchPayload} from "../../models/SearchPayload";
import {Dispatch} from "redux";

export const actionGetSearch = (payload: SearchPayload) => {
    return createAction({
        types: ['GET_SEARCH_REQUEST', 'GET_SEARCH_SUCCESS', 'GET_SEARCH_FAILURE'],
        endpoint: () => API_ENDPOINTS.search(payload),
        method: 'GET',
        headers: API_HEADERS
    });
};

export const actionSearchForm = (payload: SearchPayload) => (dispatch: Dispatch) => {
    return dispatch({
        type: 'SEARCH_FORM',
        payload
    });
};

export const actionShowMore = (payload: boolean) => (dispatch: Dispatch) => {
    return dispatch({
        type: 'SHOW_MORE',
        payload
    });
};

export const actionReset = () => (dispatch: Dispatch) => {
    return dispatch({
        type: 'RESET'
    });
};
