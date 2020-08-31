import React from "react";
import {User} from "../models/User";
import {Image, Row, Col} from 'react-bootstrap'


export default function UserView(props: { user: User }) {
    return (
        <tr>
            <td>
                <Row>
                    <Col md={3}>
                        <Image src={props.user.avatar_url} roundedCircle style={{width: "50px", height: "50px"}}/>
                    </Col>
                    <Col md={9}>
                        <p>{props.user.login}</p>
                    </Col>
                </Row>
            </td>
            <td></td>
        </tr>
    )
}
