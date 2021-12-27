import React, {Component, Fragment} from 'react';
import {Container, Row, Col} from "react-bootstrap";

import graphicsLogo from '../../asset/image/graphics.svg';
import webLogo from '../../asset/image/web.svg';
import mobileLogo from '../../asset/image/mobile.svg';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Service extends Component {

    constructor() {
        super();

        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.service).then(result => {
            this.setState({
                myData: result,
            })
        })
    }

    render() {
        const myList = this.state.myData;

        const my_view = myList.map(myList => {
            return  <Col lg={4} md={6} sm={12}>
                <div className="serviceCard text-center">
                    <img alt="img" style={{height: '200px'}} src={myList.service_logo}/>
                    <h2 className="serviceName">{myList.service_name}</h2>
                    <p className="serviceDescription">{myList.service_description}</p>
                </div>
            </Col>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">MY SERVICES</h1>

                    <Row>
                        {my_view}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Service;