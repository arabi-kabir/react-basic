import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class ContactSection extends Component {
    constructor() {
        super();

        this.state = {
            footerData: []
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.footer).then(result => {
            console.log(result)
            this.setState({
                footerData: result[0],
            })
        })
    }

    sendContact() {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let message = document.getElementById('message').value;

        let jsonObject = {
            name: name,
            email: email,
            msg: message,
        }

        RestClient.postRequest(AppUrl.contactSend, jsonObject).then(result => {
            alert("success");
        }).catch(error => {
            alert(error);
        });
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>

                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceDescription">Name</Form.Label>
                                    <Form.Control type="text" id="name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceDescription">Email Address</Form.Label>
                                    <Form.Control type="email" id="email" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="serviceDescription">Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} id="message" />
                                </Form.Group>

                                <Button variant="primary" type="button" onClick={this.sendContact}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription">{this.state.footerData.address}</p>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription"><FontAwesomeIcon  icon={faEnvelope} /> {this.state.footerData.email}</p>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription"><FontAwesomeIcon  icon={faPhone} /> {this.state.footerData.email}</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;