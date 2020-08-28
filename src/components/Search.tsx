import React from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container, Alert} from "react-bootstrap";
import SearchView from "./SearchView";
import UsersView from "./UsersView";
import OrganizationsView from "./OrganizationsView";


export default function Search() {
    const {users, organizations, isLoading, error} = useUsers();


    return (
        <>
            <Container>
                <Row>
                    <Col md={12}>
                        <h1>
                            Search for Github Users
                        </h1>
                    </Col>
                    <Col md={12}>
                        <SearchView/>
                    </Col>
                    <Col md={12}>
                        {(error.search !== "") ? <Alert variant="danger">{error.search}</Alert> : ""}
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <UsersView users={users}/>
                    </Col>
                    <Col md={6}>
                        <OrganizationsView organizations={organizations}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
