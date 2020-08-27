import {State} from "../models/State";

export const usersSelector = {
    users: (state: State) => state.users.users,
};
