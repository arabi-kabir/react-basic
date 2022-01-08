import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Courses extends Component {
    constructor() {
        super();

        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.courseHome).then(result => {
            this.setState({
                myData: result,
            })
        })
    }

    render() {
        const myList = this.state.myData;

        const my_view = myList.map(myList => {
            return <Col sm={12} md={6} lg={6}>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <img alt="img" className="courseImg" src={myList.small_img} />
                    </Col>

                    <Col lg={6} md={6} sm={12}>
                        <h5 className="courseTitle" style={{ textAlign: 'justify' }}>{myList.short_title}</h5>
                        <p className="courseDes" style={{ textAlign: 'justify' }}>{myList.short_description}</p>
                        <Link className="courseDetails" style={{ float: 'left' }} to={"/course-details/" + myList.id}>Details</Link>
                    </Col>
                </Row>
            </Col>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">OUR COURSES</h1>

                    <Row>
                        {my_view}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;