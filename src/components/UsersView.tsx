import React from "react";
import {User} from "../models/User";
import {Badge, Table, Button} from "react-bootstrap";
import UserView from "./UserView";
import './UsersView.css';
import useUsers from "../hooks/useUsers";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";


export default function UsersView(props: { users: Array<User>, title: string, tableHeader: string }) {

    const {showMore, setShowMore, getSearch, submittedSearch, setSearchForm} = useUsers();

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


    const sortNameHandler = (event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        let order = (submittedSearch.order === "asc") ? "desc" : "asc";

        setSearchForm({
            ...submittedSearch,
            sort: "",
            order: order
        })

        getSearch({
            ...submittedSearch,
            sort: "",
            order: order
        })
    };

    const sortContributionHandler = (event: React.MouseEvent<HTMLTableHeaderCellElement, MouseEvent>) => {
        let order = (submittedSearch.order === "asc") ? "desc" : "asc";
        setSearchForm({
            ...submittedSearch,
            sort: "repositories",
            order: order
        })
        getSearch({
            ...submittedSearch,
            sort: "repositories",
            order: order
        })
    };

    return (
        <>
            {props.title} <Badge variant="dark" className="badge-users">{props.users.length}</Badge>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th onClick={sortNameHandler}>
                        {props.tableHeader}
                        { (submittedSearch.sort === "") ? <FontAwesomeIcon style={{cursor:'pointer'}} icon={(submittedSearch.order !== "asc") ? faChevronUp : faChevronDown}/> : "" }
                    </th>
                    <th onClick={sortContributionHandler}>
                        Contributions
                        { (submittedSearch.sort === "repositories") ? <FontAwesomeIcon style={{cursor:'pointer'}} icon={(submittedSearch.order !== "asc") ? faChevronUp : faChevronDown}/> : "" }
                    </th>
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
