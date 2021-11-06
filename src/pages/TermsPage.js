import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import RefundDescription from "../components/RefundDescription/RefundDescription";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms"  />
                <PageTop pageTitle="Terms and Conditions"  />
                <TermsDescription />
                <Footer />
            </Fragment>
        );
    }
}

export default RefundPage;