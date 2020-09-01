import React from "react";
import useUsers from "../hooks/useUsers";
import {Col, Form, Image, Row, Button} from "react-bootstrap";
import './UsersEmptyView.css';

export default function UsersEmptyView() {
    const {reset} = useUsers();

    const clickHandler = (event: React.MouseEvent<HTMLInputElement>) => {
        event.preventDefault();
        reset()
    };
    return (
        <div className="content">
            <Row>
                <Col md={{offset: '5', span: '6'}}>
                    <Image className="image-no-user"
                           src="./images/zero.svg">
                    </Image>
                </Col>
            </Row>
            <Row>
                <Col md={{offset: '3', span: '6'}}>
                    <Form>
                        <Form.Group className="text">
                            <Form.Text className="text-muted">
                                Hmm... We didn't find any users... </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col md={{offset: '5', span: '6'}}>
                    <Button className="btn-no-user" variant="light" onClick={clickHandler} style={{cursor: 'pointer'}}>RESET</Button>
                </Col>
            </Row>
        </div>
    )
}
