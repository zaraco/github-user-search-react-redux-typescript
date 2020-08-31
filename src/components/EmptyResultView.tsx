import React from "react";
import {Form, Image, Row, Col} from "react-bootstrap";
import './EmptyResultView.css';

export default function EmptyResultView() {
    return (
        <div className="content">
            <Row>
                <Col md={{offset:'5', span:'6'}}>
                    <Image className="image-search" src="./images/search.svg">

                    </Image>
                </Col>
            </Row>
                <Row>
                <Col md={{offset:'3', span:'6'}}>
                    <Form>
                        <Form.Group>
                            <Form.Text className="text-muted">
                                Enter a login, name, or a company you are looking for.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}
