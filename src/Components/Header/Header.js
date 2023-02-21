import React from "react";
import {Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to='/homepage'>Homepage </Link>
                    <Link to='/edit_goals'>Edit goals </Link>
                    <Link to='/profile'>Profile </Link>
                </ul>
            </nav>
        </header>
    )
};
export default Header;