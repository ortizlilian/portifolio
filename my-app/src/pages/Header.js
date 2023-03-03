import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"><NavLink to="/" end>Navbar</NavLink></a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <NavLink to="/contact" end><a class="nav-link">Contact</a></NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/projects" end><a class="nav-link">Projects</a></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
}

export default Header;