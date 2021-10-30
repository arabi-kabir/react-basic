import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whileLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';

class TopNavigation extends Component {
    constructor() {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo: [whileLogo],
            navBarBack: "navBackground",
            navBarItem: "navItem"
        }
    }

    onScroll = () => {
        if(window.scrollY > 100) {
            this.setState({
                navBarTitle: "navTitleScroll",
                navBarBack: "navBackgroundScroll",
                navBarLogo: [blueLogo],
                navBarItem: "navItemScroll"
            })
        } else if(window.scrollY < 100) {
            this.setState({
                navBarTitle: "navTitle",
                navBarBack: "navBackground",
                navBarLogo: [whileLogo],
                navBarItem: "navItem"
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant="dark">
                    <Container fluid={true}>
                        <Navbar.Brand className={this.state.navBarTitle} href="#home">
                            <img src={this.state.navBarLogo}/> ARABI KABIR
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <Nav.Link className={this.state.navBarItem} href="#deets">HOME</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">SERVICES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">COURSES</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">PORTFOLIO</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">CONTACT</Nav.Link>
                                <Nav.Link className={this.state.navBarItem} href="#deets">ABOUT</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;