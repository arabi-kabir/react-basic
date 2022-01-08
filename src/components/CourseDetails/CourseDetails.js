import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";

class CourseDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            myCourseData: props.courseData
        }
    }

    render() {
        let courseDetailsArray = this.props.courseData

        console.log(courseDetailsArray);

        return (
            <Fragment>
                <Container fluid className="topFixedPage p-0">
                    <div className="topPageOverlay">
                        <Container className="topPageContentCourse">
                            <Row>
                                <Col sm={12} md={6} lg={6} >
                                    <h3 className="courseFullTitle">{courseDetailsArray.long_title}</h3>
                                    <h5 className="courseFullSubtitle">Total Student = {courseDetailsArray.total_student} </h5>
                                    <h5 className="courseFullSubtitle">Total lecture = {courseDetailsArray.total_lecture} </h5>
                                </Col>

                                <Col sm={12} md={6} lg={6} >
                                    <p className="courseFullDes">
                                        {courseDetailsArray.short_description}
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>

                <Container className="mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <h2 className="serviceName">Skill You Will Get</h2>

                            {courseDetailsArray.skill_all}

                            <Button variant="primary">More Info</Button>
                        </Col>

                        <Col sm={12} md={6} lg={6}>
                            <Player>
                                <source src={courseDetailsArray.video_url} />
                                <BigPlayButton position="center" />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CourseDetails;