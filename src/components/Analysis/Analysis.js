import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';


class Analysis extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            techDesc: ''
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.chartData).then(result => {
            this.setState({
                data: result,
            })
        })

        RestClient.getRequest(AppUrl.techDescription).then(result => {
            this.setState({
                techDesc: result[0]['tech_description'],
            })
        })
    }

    render() {
        let blue = "rgb(61,127,225)";
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">TECHNOLOGY USED</h1>
                    <Row>
                        <Col style={{height: '300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey='Technology' />
                                    <Tooltip />
                                    <Bar dataKey="Projects" fill={blue} />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col sm={12} md={12} lg={6}>
                            <p style={{ textAlign: 'justify' }} className="des">
                                { ReactHtmlParser(this.state.techDesc)}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;