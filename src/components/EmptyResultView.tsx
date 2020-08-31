import React from "react";
import {Form} from "react-bootstrap";

export default function EmptyResultView() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Text className="text-muted">
                        Enter a login, name, or a company you are looking for.
                    </Form.Text>
                </Form.Group>
            </Form>
        </>
    )
}
