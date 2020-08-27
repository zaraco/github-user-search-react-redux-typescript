import React, {useEffect} from 'react';
import useUsers from "../hooks/useUsers";

export default function Search() {
    const {users, organizations, getSearch} = useUsers();

    useEffect(() => {
        getSearch({q: "zarac"})

    }, []);

    return (
        <>
            {JSON.stringify(users)}
            {JSON.stringify(organizations)}
        </>
    )
}
