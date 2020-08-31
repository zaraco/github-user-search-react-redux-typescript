import React from "react";
import useUsers from "../hooks/useUsers";

export default function UsersEmptyView() {
    const {setSearchForm} = useUsers();

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearchForm({
            q: "",
            order: "",
            sort: ""
        })
    };
    return (
        <>
            <p>Hmm... We didn't find any users...</p>
            <p onClick={clickHandler} style={{cursor: 'pointer'}}>RESET</p>
        </>
    )
}
