import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone, faPlayCircle} from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Follow Me</h1>
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faFacebook} /> Facebook</a>
                            <br/>
                            <a className="socialLink" href="#"><FontAwesomeIcon  icon={faYoutube} /> Youtube</a>
                        </Col>

                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Address</h1>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription">Dhanmondi, Dhaka, 1202</p>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription"><FontAwesomeIcon  icon={faEnvelope} /> mail2arabi@gmail.com</p>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription"><FontAwesomeIcon  icon={faPhone} /> +0992323232</p>
                        </Col>

                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Information</h1>
                            <a className="footerLink" href="#">About Me</a>
                            <br/>
                            <a className="footerLink" href="#">My Resume</a>
                            <br/>
                            <a className="footerLink" href="#">Contact Me</a>
                        </Col>

                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Legal</h1>
                            <a className="footerLink" href="#">Refund Policy</a>
                            <br/>
                            <a className="footerLink" href="#">Terms and condition</a>
                            <br/>
                            <a className="footerLink" href="#">Privacy Policy</a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSection">
                    <a className="copyrightLink" href="#">arabikabir.com @ copy 2021</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;