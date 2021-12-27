import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import TermsDescription from "../components/TermsDescription/TermsDescription";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0);
    }

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