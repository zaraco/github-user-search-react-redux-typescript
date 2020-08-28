import React from "react";
import {User} from "../models/User";


export default function UserView(props: {user: User}) {
    return (
        <tr>
            <td>{props.user.id}</td>
            <td>{props.user.login}</td>
        </tr>
    )
}
