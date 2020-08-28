import React, {useEffect} from "react";
import useUsers from "../hooks/useUsers";
import {Row, Col, Container} from "react-bootstrap";


export default function Search() {
    const {users, organizations, getSearch} = useUsers();

    useEffect(() => {
        getSearch({q: "zarac"})

    }, []);

    return (
        <>
            <Container>
                <Row>
                    <Col md={4}>

                        {JSON.stringify(users)}
                        {JSON.stringify(organizations)}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
