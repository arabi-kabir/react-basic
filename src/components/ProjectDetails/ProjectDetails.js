import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class ProjectDetails extends Component {
    constructor(props) {
        super();

        this.state = {
            myProjectId: props.id,
            img_two: '',
            project_name: '',
            short_description: '',
            project_features: '',
            live_preview: ''
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.projectsDetails + this.state.myProjectId).then(result => {
            this.setState({
                img_two : result.img_two,
                project_name : result.project_name,
                short_description : result.short_description,
                project_features : result.project_features,
                live_preview : result.live_preview,
            })
        }).catch(error => {

        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img alt="img" style={{ width: "100%" }} src={this.state.img_two} />
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName">{this.state.project_name}</h2>
                            <p className="serviceDescription">{this.state.short_description}</p>

                            { ReactHtmlParser(this.state.project_features) }

                            <Button variant="primary">More Info</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;