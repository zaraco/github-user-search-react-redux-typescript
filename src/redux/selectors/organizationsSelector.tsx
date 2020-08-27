import {State} from "../../models/State";

export const organizationsSelector = {
    organizations: (state: State) => state.organizations.organizations,
};
