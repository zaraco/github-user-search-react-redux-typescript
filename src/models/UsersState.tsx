import {User} from "./User";
import {UsersSearchResponse} from "./UsersSearchResponse";

export interface UsersState {
    users: Array<User>,
    usersSearchResponse: UsersSearchResponse | null
}
