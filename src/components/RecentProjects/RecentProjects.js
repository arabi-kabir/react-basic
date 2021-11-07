import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">RECENT PROJECTS</h1>

                    <Row>
                        <Col className="p-2" sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/request-demo-inscription-blue-keyboard-key-written-metallic-finger-pressing-166070644.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-2" sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/request-demo-inscription-blue-keyboard-key-written-metallic-finger-pressing-166070644.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="p-2" sm={12} md={6} lg={4}>
                            <Card className="projectCard">
                                <Card.Img variant="top" src="https://thumbs.dreamstime.com/b/request-demo-inscription-blue-keyboard-key-written-metallic-finger-pressing-166070644.jpg" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary"><Link className="link-style" to="/project-details">Details</Link></Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;