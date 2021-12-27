import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import {Link} from "react-router-dom";

class ClientReview extends Component {
    constructor() {
        super();

        this.state = {
            myData: []
        }
    }

    componentDidMount() {
        RestClient.getRequest(AppUrl.clientReview).then(result => {
            this.setState({
                myData: result,
            })
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        const myList = this.state.myData;

        const my_view = myList.map(myList => {
            return  <div>
                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img alt="img" src={myList.client_logo} className="circleImg" />
                        <h1 className="serviceName">{myList.client_title}</h1>
                        <p className="serviceDescription">
                            {myList.client_description}
                        </p>
                    </Col>
                </Row>
            </div>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Client Says</h1>

                    <Slider {...settings}>
                        {my_view}
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;