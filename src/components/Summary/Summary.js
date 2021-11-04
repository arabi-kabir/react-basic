import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className="summaryBanner summarySection p-0">
                    <div className="summaryBannerOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <span ref={countUpRef} />
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="countTitle">TOTAL PROJECTS</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>

                                        <Col>
                                            <h1 className="countNumber">100</h1>
                                            <h4 className="countTitle">TOTAL CLIENTS</h4>
                                            <hr className="bg-white w-25" />
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card className="workCard">
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How i work</Card.Title>
                                            <Card.Text style={{ textAlign: 'left' }}>
                                                <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement gathering</p>
                                                <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System analysis</p>
                                                <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                                <p className="cardSubTitle"> <FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;