import React from "react";
import Nav from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <div class="jumbotron">
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        );
    }
}