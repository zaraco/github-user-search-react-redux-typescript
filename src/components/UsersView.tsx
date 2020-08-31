import React from "react";
import {User} from "../models/User";
import {Badge, Table} from "react-bootstrap";
import UserView from "./UserView";


export default function UsersView(props: { users: Array<User> }) {

    const usersView = props.users.map((user) => (
        <UserView user={user}/>
    ));

    return (
        <>
            users {props.users.length ? <Badge variant="dark">{props.users.length}</Badge> : null}
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>User</th>
                    <th>Contributions</th>
                </tr>
                </thead>

                <tbody>
                {usersView}
                </tbody>
            </Table>
        </>
    )
}
