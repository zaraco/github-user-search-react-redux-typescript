import {State} from "../../models/State";

export const usersSelector = {
    users: (state: State) => state.users.users,
    organizations: (state: State) => state.users.organizations,
    search: (state: State) => state.users.search,
    submittedSearch: (state: State) => state.users.submittedSearch,
    isLoading: (state: State) => state.users.isLoading,
    error: (state: State) => state.users.error
};
