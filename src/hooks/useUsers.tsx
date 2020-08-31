import {useDispatch, useSelector} from "react-redux";
import {usersSelector} from "../redux/selectors/usersSelector";
import {useCallback} from "react";
import {actionGetSearch, actionSearchForm, actionShowMore} from "../redux/actions/usersActions";
import {UsersSearchResponse} from "../models/UsersSearchResponse";

const useUsers = () => {
    const dispatch = useDispatch();

    const users = useSelector(usersSelector.users);
    const organizations = useSelector(usersSelector.organizations);
    const search = useSelector(usersSelector.search);
    const submittedSearch = useSelector(usersSelector.submittedSearch);
    const error = useSelector(usersSelector.error);
    const isLoading = useSelector(usersSelector.isLoading);
    const showMore = useSelector(usersSelector.showMore);

    const getSearch = useCallback((payload) => {
        dispatch(actionGetSearch(payload));
    },[]);

    const setSearchForm = useCallback((payload) => {
        dispatch(actionSearchForm(payload));
    },[]);

    const setShowMore = useCallback((payload) => {
        dispatch(actionShowMore(payload));
    },[]);




    return {
        users,
        organizations,
        getSearch,
        setSearchForm,
        search,
        submittedSearch,
        error,
        isLoading,
        showMore,
        setShowMore

    };

};

export default useUsers;
