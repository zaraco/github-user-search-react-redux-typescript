import {useDispatch, useSelector} from "react-redux";
import {User} from "../models/User";
import {usersSelector} from "../redux/selectors/usersSelector";
import {useCallback} from "react";
import {actionGetUsers} from "../redux/actions/usersActions";

const useUsers = () => {

    const users : Array<User> = useSelector(usersSelector.users);
    const dispatch = useDispatch();

    const getUsers = useCallback(() => {
        dispatch(actionGetUsers());
    },[]);

    return {
        users,
        getUsers
    };

};

export default useUsers;
