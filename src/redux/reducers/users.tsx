import { Action } from "redux";
import {UsersState} from "../models/UsersState";

const initialState: UsersState = {
    users: []
};

export function users(state = initialState, action: Action): UsersState {
    switch (action.type) {
        default:
            return state;
    }
}
