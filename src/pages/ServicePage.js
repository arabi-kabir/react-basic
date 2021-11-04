import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Service from "../components/Services/Service";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";

class ServicePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Service" />
                <PageTop pageTitle="My Services"/>
                <Service />
                <ContactSection />
                <Footer />
            </Fragment>
        );
    }
}

export default ServicePage;