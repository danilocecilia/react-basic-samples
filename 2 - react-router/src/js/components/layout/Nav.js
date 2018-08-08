import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    constructor() {
        super();

        this.state = {
            collapsed: true
        }
    }

    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const { collapsed } = this.state;
        const navClass = collapsed ? "collapse" : "";
        const homeClass = location.pathname === "/" ? "active" : "";
        const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">REACTJS</a>
                <button class="navbar-toggler" type="button" onClick={this.toggleCollapse.bind(this)}>
                    <span class="navbar-toggler-icon"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <div class={"navbar-collapse " + navClass} id="navbarColor01">
                    <ul class="navbar-nav mr-auto">
                        <li class={"nav-item " + homeClass}>
                            <IndexLink to="/" href="#" className="nav-link">Home
                                <span class="sr-only">(current)</span>
                            </IndexLink>
                        </li>
                        <li class={"nav-item " + aboutClass}>
                            <Link to="about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}