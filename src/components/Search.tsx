import React, {useEffect} from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container, Navbar, Form, FormControl, Table} from "react-bootstrap";
import UserView from "./UserView";


export default function Search() {
    const {users, organizations, getSearch} = useUsers();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        getSearch({q: event.target.value })
    };

    const usersView = users.map((user)=>(
        <UserView user={user}/>
    ));

    const organizationsView = organizations.map((organization)=>(
        <UserView user={organization}/>
    ));

    return (
        <>
            <Container>
                <Row>
                    <Col md={10}>
                        <h1>
                            Search for Github Users
                        </h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Navbar bg="dark" expand="lg">
                            <Form>
                                <Form.Group controlId="formBasicSearch">
                                    <FormControl type="text" placeholder="Search" onChange={changeHandler}/>
                                </Form.Group>
                            </Form>
                        </Navbar>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
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
                                <th>#</th>
                                <th>Table heading</th>
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