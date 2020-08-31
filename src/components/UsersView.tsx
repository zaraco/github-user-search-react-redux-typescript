import React from "react";
import {User} from "../models/User";
import {Badge, Table, Button} from "react-bootstrap";
import UserView from "./UserView";
import './UsersView.css';
import useUsers from "../hooks/useUsers";


export default function UsersView(props: { users: Array<User>, title: string, tableHeader: string }) {

    const {showMore, setShowMore} = useUsers();

    let usersCompact;

    if (!showMore){

        usersCompact = props.users.slice(0, 5)
    }
    else {
        usersCompact = props.users
    };

    const usersView = usersCompact.map((user) => (
        <UserView user={user}/>
    ));

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        setShowMore(!showMore)
    }

    return (
        <>
            {props.title} <Badge variant="dark" className="badge-users">{props.users.length}</Badge>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>{props.tableHeader}</th>
                    <th>Contributions</th>
                </tr>
                </thead>

                <tbody>
                {usersView}
                </tbody>
            </Table>
            <Button variant="secondary" onClick={clickHandler}>
                {showMore ?'Show Less' : 'Show More' }
            </Button>
        </>
    )
}
