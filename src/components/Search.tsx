import React, {useEffect} from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container, Navbar, Form, FormControl, Table} from "react-bootstrap";
import UserView from "./UserView";
import SearchView from "./SearchView";


export default function Search() {
    const {users, organizations, getSearch} = useUsers();

    const usersView = users.map((user) => (
        <UserView user={user}/>
    ));

    const organizationsView = organizations.map((organization) => (
        <UserView user={organization}/>
    ));

    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>
                            Search for Github Users
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <SearchView/>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
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
                    </Col>
                    <Col md={6}>
                        <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>Company</th>
                                <th>People</th>
                            </tr>
                            </thead>

                            <tbody>
                            {organizationsView}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
