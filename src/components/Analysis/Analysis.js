import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';


class Analysis extends Component {
    constructor() {
        super();

        this.state = {
            data: [
                { Technology: 'Java', Projects: 100 },
                { Technology: 'PHP', Projects: 50 },
                { Technology: 'C++', Projects: 10 },
                { Technology: 'GO', Projects: 20 },
                { Technology: 'Python', Projects: 90 },
                { Technology: 'Kotlin', Projects: 70 },
                { Technology: 'Node', Projects: 50 },
                { Technology: 'React', Projects: 80 },
            ]
        }
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque culpa
                                dolorum eligendi hic, nemo numquam perspiciatis quisquam repudiandae tenetur vel,
                                voluptatem. Architecto assumenda commodi cupiditate perferendis rerum velit.
                            </p>

                            <p style={{ textAlign: 'justify' }} className="des">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda at atque culpa andae tenetur vel,
                                voluptatem. Architecto assumenda commodi cupiditate perferendis rerum velit.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;