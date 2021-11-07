import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AllCoursesPage from "../pages/AllCoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import ServicePage from "../pages/ServicePage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPage from "../pages/PrivacyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/service" component={ServicePage} />
                    <Route exact path="/course" component={AllCoursesPage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/refund" component={RefundPage} />
                    <Route exact path="/terms" component={TermsPage} />
                    <Route exact path="/privacy" component={PrivacyPage} />
                    <Route exact path="/project-details" component={ProjectDetailsPage} />
                    <Route exact path="/course-details" component={CourseDetailsPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;