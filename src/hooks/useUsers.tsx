import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../redux/selectors/usersSelector";
import {useCallback} from "react";
import {actionGetSearch} from "../redux/actions/usersActions";
import {UsersSearchResponse} from "../models/UsersSearchResponse";

const useUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector(usersSelector.users);
    const organizations = useSelector(usersSelector.organizations);

    const getSearch = useCallback((payload) => {
        dispatch(actionGetSearch(payload));
    },[]);



    return {
        users,
        organizations,
        getSearch
    };

};

export default useUsers;
