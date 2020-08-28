import React from "react";
import {User} from "../models/User";


export default function UserView(props: {user: User}) {
    return (
        <tr>
            <td>
                <p>{props.user.login}</p>
                <p>{props.user.name}</p>
            </td>
            <td></td>
        </tr>
    )
}
