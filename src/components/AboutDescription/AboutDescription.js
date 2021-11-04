import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class AboutDescription extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <h2 className="serviceName">WHO I AM</h2>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab accusantium dolores doloribus eaque harum, ipsa laborum
                                magni maiores maxime nisi officia quae, quam quisquam reiciendis rerum sint ullam
                                unde voluptates.
                            </p>

                            <h2 className="serviceName">MY MISSION</h2>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab accusantium dolores doloribus eaque harum, ipsa laborum
                                magni maiores maxime nisi officia quae, quam quisquam reiciendis rerum sint ullam
                                unde voluptates.
                            </p>

                            <h2 className="serviceName">MY VISION</h2>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Ab accusantium dolores doloribus eaque harum, ipsa laborum
                                magni maiores maxime nisi officia quae, quam quisquam reiciendis rerum sint ullam
                                unde voluptates.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AboutDescription;