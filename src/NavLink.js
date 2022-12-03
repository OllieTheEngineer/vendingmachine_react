import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <NavLink exact to="/">
                VendingMachine
            </NavLink>
            <NavLink exact to="/Popcorn">
                Popcorn
            </NavLink>
            <NavLink exact to="/PotatoChips">
                PotatoChips
            </NavLink>
            <NavLink exact to="/Granola">
                Granola
            </NavLink>
        </nav>
    )
}

export default NavBar;