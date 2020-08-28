import React from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container, Alert} from "react-bootstrap";
import SearchView from "./SearchView";
import UsersView from "./UsersView";
import OrganizationsView from "./OrganizationsView";
import UsersEmptyView from "./UsersEmptyView";
import EmptyResultView from "./EmptyResultView";


export default function Search() {
    const {users, organizations, submittedSearch, error} = useUsers();


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

                {(submittedSearch.q === "") ?
                    <Row><Col><EmptyResultView/></Col></Row> :
                    <Row>
                        <Col md={6}>
                            {(users.length > 0) ?
                                <UsersView users={users}/>
                                : <UsersEmptyView/>
                            }
                        </Col>
                        <Col md={6}>
                            {(organizations.length > 0) ?
                                <OrganizationsView organizations={organizations}/>
                                : <UsersEmptyView/>
                            }
                        </Col>
                    </Row>
                }

            </Container>
        </>
    )
}
