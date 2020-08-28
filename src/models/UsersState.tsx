import {User} from "./User";
import {SearchPayload} from "./SearchPayload";

export interface UsersState {
    users: Array<User>,
    organizations: Array<User>,
    search: SearchPayload,
    submittedSearch: SearchPayload,
    isLoading: {search: boolean},
    error: {search: string}
}
