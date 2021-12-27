import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/Service";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import Courses from "../components/Courses/Courses";
import Videos from "../components/Video/Videos";
import ClientReview from "../components/ClientReview/ClientReview";
import Footer from "../components/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="Home" />
                <TopBanner />
                <Services />
                <Analysis />
                <Summary />
                <RecentProjects />
                <Courses />
                <Videos />
                <ClientReview />
                <Footer />
            </Fragment>
        );
    }
}

export default HomePage;