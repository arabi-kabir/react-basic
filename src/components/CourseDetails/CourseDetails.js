import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import {Link} from "react-router-dom";

class CourseDetails extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6} >
                                    <h3 className="courseFullTitle">Full Dynamic Website</h3>
                                    <h5 className="courseFullSubtitle">Total Student = 30 </h5>
                                    <h5 className="courseFullSubtitle">Total lecture = 60 </h5>
                                </Col>

                                <Col sm={12} md={6} lg={6} >
                                    <p className="courseFullDes">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium commodi consequatur culpa,
                                        debitis deuasi sapiente sunt voluptas, voluptate?issimos exitis deleniti harum mollitia nobis provident,
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h2 className="serviceName">Skill You Will Get</h2>

                            <ul>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                                <li className="serviceDescription">Lorem ipsum dolor sit amet, consectetur adipisicing.</li>
                            </ul>

                            <Button variant="primary">More Info</Button>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;