import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class TopBanner extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            subtitle: ''
        }
    }
    componentDidMount() {
        RestClient.getRequest(AppUrl.homeTopTitle).then(result => {
            // console.log(result)
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid className="topFixedBanner p-0">
                    <div className="topBannerOverlay">
                        <Container className="topContent">
                            <Row>
                                <Col className="text-center">
                                    <h1 className="topTitle">{this.state.title}</h1>
                                    <h4 className="topSubTitle">{this.state.subtitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default TopBanner;