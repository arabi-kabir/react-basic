import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";

class AllProjects extends Component {
    constructor() {
        super();

        this.state = {
            myData: [],
            loading: true
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.projects3).then(result => {
            console.log(result)
            this.setState({
                myData: result,
                loading: false
            })
        })
    }

    render() {
        if(this.state.loading) {
            return <Loading />
        }

        const myList = this.state.myData;

        const my_view = myList.map(myList => {
            return <Col className="p-2" sm={12} md={6} lg={4}>
                <Card className="projectCard">
                    <Card.Img variant="top" src={myList.img_one} />
                    <Card.Body>
                        <Card.Title className="projectCardTitle">{myList.project_name}</Card.Title>
                        <Card.Text className="projectCardDes">
                            {myList.short_description}
                        </Card.Text>
                        <Button variant="primary"><Link className="link-style" to={"/project-details/" + myList.id + '/' + myList.project_name}>Details</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        })

        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        {my_view}
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default AllProjects;