import React from "react";
import {User} from "../models/User";
import {Col, Table} from "react-bootstrap";
import UserView from "./UserView";


export default function OrganizationsView(props: { organizations: Array<User> }) {

    const organizationsView = props.organizations.map((organization) => (
        <UserView user={organization}/>
    ));

    return (
        <Table responsive="sm">
            <thead>
            <tr>
                <th>User</th>
                <th>Contributions</th>
            </tr>
            </thead>

            <tbody>
            {organizationsView}
            </tbody>
        </Table>
    )
}
