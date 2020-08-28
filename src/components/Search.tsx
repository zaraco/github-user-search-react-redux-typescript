import React, {useEffect} from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container, Navbar, Form, FormControl, Table} from "react-bootstrap";


export default function Search() {
    const {users, organizations, getSearch} = useUsers();

    useEffect(() => {
        getSearch({q: "zarac"})

    }, []);

    // {JSON.stringify(users)}
    //  {JSON.stringify(organizations)}

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
                                    <FormControl type="text" placeholder="Search"/>
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
                                <th>Table heading</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col md={6}>
                        <Table responsive="sm">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Table heading</th>
                                <th>Table heading</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
