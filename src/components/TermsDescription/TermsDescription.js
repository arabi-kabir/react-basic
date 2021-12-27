import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class TermsDescription extends Component {
    constructor() {
        super();

        this.state = {
            desc: []
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.information).then(result => {
            this.setState({
                desc: result[0]['terms'],
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            {ReactHtmlParser(this.state.desc)}
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TermsDescription;