import React from "react";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import useUsers from "../hooks/useUsers";
import EmptyResultView from "./EmptyResultView";


export default function SearchView() {
    const {getSearch, search, setSearchForm, isLoading} = useUsers();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchForm({
            ...search,
            q: event.target.value
        })
    };

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        getSearch(search)
    };

    return (
        <>
            <Row>
                <Col md={7}>
                    <Form className="search">
                        <Form.Group controlId="formBasicSearch">
                            <Form.Control type="text" placeholder="Search" value={search.q} onChange={changeHandler} />
                        </Form.Group>
                    </Form>
                </Col>
                <Col md={3}>
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
