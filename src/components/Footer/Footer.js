import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Footer extends Component {
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

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerSection text-center">
                    <Row>
                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Follow Me</h1>
                            <a  target="_blank" className="socialLink" href={this.state.footerData.facebook}><FontAwesomeIcon  icon={faFacebook} /> Facebook</a>
                            <br/>
                            <a target="_blank" className="socialLink" href={this.state.footerData.facebook}><FontAwesomeIcon  icon={faYoutube} /> Youtube</a>
                        </Col>

                        <Col lg={3} md={3} sm={12} className="p-5" style={{ textAlign: 'justify' }}>
                            <h1 className="serviceName">Address</h1>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription">{this.state.footerData.address}</p>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription"><FontAwesomeIcon  icon={faEnvelope} /> {this.state.footerData.email}</p>
                            <p style={{ marginBottom: '5px' }} className="serviceDescription"><FontAwesomeIcon  icon={faPhone} /> {this.state.footerData.email}</p>
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
                    <a className="copyrightLink" href="#">{this.state.footerData.footer_credit}</a>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;