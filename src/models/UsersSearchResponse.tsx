import {User} from "./User";

export interface UsersSearchResponse {
    total_count: number,
    incomplete_results: boolean,
    items: Array<User>
}
