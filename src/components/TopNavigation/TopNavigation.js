import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import '../../asset/css/custom.css';
import '../../asset/css/bootstrap.min.css';
import whileLogo from '../../asset/image/navlogo.svg';
import blueLogo from '../../asset/image/navlogoScroll.svg';
import {Link, NavLink} from "react-router-dom";

class TopNavigation extends Component {
    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navBarLogo: [whileLogo],
            navBarBack: "navBackground",
            navBarItem: "navItem",
            navVariant: 'dark',
            pageTitle: props.title
        }
    }

    onScroll = () => {
        if(window.scrollY > 100) {
            this.setState({
                navBarTitle: "navTitleScroll",
                navBarBack: "navBackgroundScroll",
                navBarLogo: [blueLogo],
                navBarItem: "navItemScroll",
                navVariant: 'light'
            })
        } else if(window.scrollY < 100) {
            this.setState({
                navBarTitle: "navTitle",
                navBarBack: "navBackground",
                navBarLogo: [whileLogo],
                navBarItem: "navItem",
                navVariant: 'dark'
            })
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    render() {
        return (
            <Fragment>
                <title>{ this.state.pageTitle }</title>
                <Navbar variant={this.state.navVariant} className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg">
                    <Container fluid={true}>
                        <div>
                            <NavLink className={this.state.navBarTitle} to="/"> <img src={this.state.navBarLogo}/> ARABI KABIR </NavLink>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto"></Nav>
                            <Nav>
                                <Nav.Link as={Link} className={this.state.navBarItem} to="/">HOME </Nav.Link>
                                <Nav.Link as={Link} className={this.state.navBarItem} to="/service">SERVICES </Nav.Link>
                                <Nav.Link as={Link} className={this.state.navBarItem} to="/course">COURSES </Nav.Link>
                                <Nav.Link as={Link} className={this.state.navBarItem} to="/portfolio">PORTFOLIO </Nav.Link>
                                <Nav.Link as={Link} className={this.state.navBarItem} to="/contact">CONTACT </Nav.Link>
                                <Nav.Link as={Link} className={this.state.navBarItem} to="/about">ABOUT </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;