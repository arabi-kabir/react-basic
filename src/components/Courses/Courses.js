import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>

                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.tempo.io/hubfs/Pages/Global/demo-image.svg" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle" style={{ textAlign: 'justify' }}>Web Development</h5>
                                    <p className="courseDes" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate, doloribus earum error expli</p>
                                    <a className="courseDetails" style={{ float: 'left' }} href='#'>Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.tempo.io/hubfs/Pages/Global/demo-image.svg" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle" style={{ textAlign: 'justify' }}>Web Development</h5>
                                    <p className="courseDes" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate, doloribus earum error expli</p>
                                    <a className="courseDetails" style={{ float: 'left' }} href='#'>Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.tempo.io/hubfs/Pages/Global/demo-image.svg" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle" style={{ textAlign: 'justify' }}>Web Development</h5>
                                    <p className="courseDes" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate, doloribus earum error expli</p>
                                    <a className="courseDetails" style={{ float: 'left' }} href='#'>Details</a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src="https://www.tempo.io/hubfs/Pages/Global/demo-image.svg" />
                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <h5 className="courseTitle" style={{ textAlign: 'justify' }}>Web Development</h5>
                                    <p className="courseDes" style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate, doloribus earum error expli</p>
                                    <a className="courseDetails" style={{ float: 'left' }} href='#'>Details</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;