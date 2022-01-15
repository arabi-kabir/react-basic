import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import wrong from "../../asset/image/wrong.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loaderAnimation" src={wrong} />
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;