import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";
import {Organization} from "../models/Organization";
import {organizationsSelector} from "../redux/selectors/organizationsSelector";
import {actionGetOrganizations} from "../redux/actions/organizationsActions";

const useOrganizations = () => {

    const organizations : Array<Organization> = useSelector(organizationsSelector.organizations);
    const dispatch = useDispatch();

    const getOrganizations = useCallback(() => {
        dispatch(actionGetOrganizations());
    },[]);

    return {
        organizations,
        getOrganizations
    };

};

export default useOrganizations;
