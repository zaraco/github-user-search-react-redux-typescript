import {useSelector} from "react-redux";
import {User} from "../redux/models/User";
import {usersSelector} from "../redux/selectors/usersSelector";

const useUsers = () => {

    const users : Array<User> = useSelector(usersSelector.users);

    return {
        users
    };

};

export default useUsers;
