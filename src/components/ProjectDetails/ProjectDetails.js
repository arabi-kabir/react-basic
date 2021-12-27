import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class ProjectDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img alt="img" style={{ width: "100%" }} src="https://www.seekpng.com/png/detail/60-604032_face-businessman-png-dummy-images-for-testimonials.png" alt="img" />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">Foll Bazar</h2>
                            <p className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, omnis?</p>

                            <ul>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            </ul>

                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;