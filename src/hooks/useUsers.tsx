import {useDispatch, useSelector} from "react-redux";
import {User} from "../models/User";
import {usersSelector} from "../redux/selectors/usersSelector";
import {useCallback} from "react";
import {actionGetUsers, actionSearchUsers} from "../redux/actions/usersActions";
import {UsersSearchResponse} from "../models/UsersSearchResponse";

const useUsers = () => {

    const users : Array<User> = useSelector(usersSelector.users);
    const usersSearchResponse : UsersSearchResponse | null = useSelector(usersSelector.usersSearchResponse);
    const dispatch = useDispatch();

    const getUsers = useCallback(() => {
        dispatch(actionGetUsers());
    },[]);

    const searchUsers = useCallback((payload) => {
        dispatch(actionSearchUsers(payload));
    },[]);



    return {
        users,
        usersSearchResponse,
        getUsers,
        searchUsers
    };

};

export default useUsers;
