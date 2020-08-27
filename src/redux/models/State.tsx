import {UsersState} from "./UsersState";
import {OrganizationsState} from "./OrganizationsState";

export interface State {
    users: UsersState
    organizations: OrganizationsState
}
