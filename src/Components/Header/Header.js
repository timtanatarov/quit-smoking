import React from "react";
import {Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to='/Homepage'>Homepage</Link></li>
                </ul>
            </nav>
        </header>
    )
};
export default Header;