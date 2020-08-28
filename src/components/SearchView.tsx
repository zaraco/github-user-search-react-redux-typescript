import React from "react";
import {User} from "../models/User";
import {Button, Col, Form, FormControl, Navbar} from "react-bootstrap";
import useUsers from "../hooks/useUsers";


export default function SearchView() {
    const {getSearch, search, setSearchForm} = useUsers();

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
        <Form>
            <Form.Row className="align-items-center">
                <Col xs="auto">
                    <FormControl className="mb-2" type="text" placeholder="Search" value={search.q} onChange={changeHandler}/>
                </Col>
                <Col xs="auto">
                    <Button type="submit" className="mb-2" onClick={clickHandler}>
                        Submit
                    </Button>
                </Col>
            </Form.Row>
        </Form>
    )
}
