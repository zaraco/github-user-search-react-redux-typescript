import React from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import useUsers from "../hooks/useUsers";
import './SearchView.css';


export default function SearchView() {
    const {getSearch, search, setSearchForm, isLoading} = useUsers();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchForm({
            q: event.target.value,
            order: "",
            sort: ""
        })
    };

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        getSearch(search)
    };

    return (
        <>
            <Row className="content">
                <Col md={10}>
                    <Form className="search">
                        <Form.Group controlId="formBasicSearch">
                            <Form.Control type="text" placeholder="Type a user name here" value={search.q} onChange={changeHandler} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={2}>
                    {(isLoading.search) ?
                        <Button variant="secondary" className="btn-disabled" disabled>
                            <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                            Loading...
                        </Button>
                        :
                        <Button type="submit" variant="dark" className="btn" onClick={clickHandler}>
                            Submit
                        </Button>
                    }
                </Col>
            </Row>
        </>
    )
}
