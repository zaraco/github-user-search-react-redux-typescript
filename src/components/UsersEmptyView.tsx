import React from "react";
import useUsers from "../hooks/useUsers";

export default function UsersEmptyView() {
    const {reset} = useUsers();

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        reset()
    };
    return (
        <>
            <p>Hmm... We didn't find any users...</p>
            <p onClick={clickHandler} style={{cursor: 'pointer'}}>RESET</p>
        </>
    )
}
