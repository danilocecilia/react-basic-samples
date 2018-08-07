import React from 'react';
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
    render() {
        const homeClass = location.pathname === "/" ? "active" : "";
        const aboutClass = location.pathname.match(/^\/about/) ? "active" : "";    

        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <a class="navbar-brand" href="#">REACTJS</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
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