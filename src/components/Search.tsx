import React from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container, Alert, Tabs, Tab} from "react-bootstrap";
import SearchView from "./SearchView";
import UsersView from "./UsersView";
import UsersEmptyView from "./UsersEmptyView";
import EmptyResultView from "./EmptyResultView";
import './Search.css'

export default function Search() {
    const {users, organizations, submittedSearch, error} = useUsers();


    return (
        <div className="content">
                <Row>
                    <Col md={12}>
                        <h1 className="text">
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
                    <Tabs defaultActiveKey="users" id="tab">
                        <Tab eventKey="users" title="Users">
                            {(users.length > 0) ?
                                <UsersView users={users} title="Users" tableHeader="user"/>
                                : <UsersEmptyView/>
                            }
                        </Tab>
                        <Tab eventKey="organizations" title="Organizations">
                            {(organizations.length > 0) ?
                                <UsersView users={organizations} title="Organizations" tableHeader="organization"/>
                                : <UsersEmptyView/>
                            }
                        </Tab>
                    </Tabs>
                }
        </div>
    )
}
