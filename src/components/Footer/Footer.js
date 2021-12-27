import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

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
                            <Link to="/about" className="footerLink" href="#">About Me</Link>
                            <br/>
                            <Link to="/contact" className="footerLink" href="#">Contact Me</Link>
                        </Col>

                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Legal</h1>
                            <Link to="/refund" className="footerLink">Refund Policy</Link>
                            <br/>
                            <Link to="/terms" className="footerLink">Terms and condition</Link>
                            <br/>
                            <Link to="/privacy" className="footerLink">Privacy Policy</Link>
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