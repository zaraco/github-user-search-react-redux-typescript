import React from "react";
import {User} from "../models/User";
import {Badge, Table, Button} from "react-bootstrap";
import UserView from "./UserView";
import './OranizationsView.css';
import useUsers from "../hooks/useUsers";


export default function OrganizationsView(props: { organizations: Array<User> }) {

    const{showMore, setShowMore} = useUsers();


    let usersCompact;

    if(!showMore){
        usersCompact = props.organizations.slice(0, 5)

    } else {
        usersCompact = props.organizations
    };


    const organizationsView = usersCompact.map((organization) => (
        <UserView user={organization}/>
    ));


    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        setShowMore(!showMore)

    }

    return (
        <>
            organizations {props.organizations.length ? <Badge variant="dark" className="badge-organs">{props.organizations.length}</Badge> : null}

            <Table responsive="sm">
                <thead>
                <tr>
                    <th>Organization</th>
                    <th>Contributions</th>
                </tr>
                </thead>

                <tbody>
                {organizationsView}
                </tbody>
            </Table>
            <Button variant="secondary" onClick={clickHandler}>
                {showMore ? "Show Less": "Show More"}
            </Button>
        </>
    )
}
