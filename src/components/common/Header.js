import React from 'react';

import { NavLink } from 'react-router-dom';


const Header = () =>{
    const activeStyle = {color:"#f15B2a"};

    return(
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Home</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>{" | "}
            <NavLink to="/dishes" activeStyle={activeStyle}>Dishes</NavLink>
        </nav>
    );
}

export default Header;