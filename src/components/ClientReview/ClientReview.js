import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";

class ClientReview extends Component {
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

        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="serviceMainTitle">Client Says</h1>

                    <Slider {...settings}>
                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img alt="img" src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" className="circleImg" />
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur at consequatur consequuntur, cupiditate delectus dolorum
                                        earum enim eum illo illum, modi mollitia nihil perferendis, placeat quisquam tempora totam.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img alt="img" src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" className="circleImg" />
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur at consequatur consequuntur, cupiditate delectus dolorum
                                        earum enim eum illo illum, modi mollitia nihil perferendis, placeat quisquam tempora totam.
                                    </p>
                                </Col>
                            </Row>
                        </div>

                        <div>
                            <Row className="text-center justify-content-center">
                                <Col lg={6} md={6} sm={12}>
                                    <img alt="img" src="https://www.pngarts.com/files/5/User-Avatar-Transparent.png" className="circleImg" />
                                    <h1 className="serviceName">Web Development</h1>
                                    <p className="serviceDescription">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur at consequatur consequuntur, cupiditate delectus dolorum
                                        earum enim eum illo illum, modi mollitia nihil perferendis, placeat quisquam tempora totam.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;