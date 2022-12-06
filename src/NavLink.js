import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to="/" />
                VendingMachine
            <NavLink exact to="/Popcorn" />
                Popcorn
            <NavLink exact to="/PotatoChips" />
                PotatoChips
            <NavLink exact to="/Granola" />
                Granola
        </nav>
    )
}

export default NavBar;