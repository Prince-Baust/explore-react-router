import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    const navStyles = {
        backgroundColor: 'skyblue',
        padding: '20px',
        fontSize: '20px'
    };
    const navLinkStyle = {
        color: 'black',
        fontWeight: '500',
        marginLeft: '20px',
        textDecoration: 'none'
    };
    const activeStyle = {
        color: 'red',
        borderBottom: '2px solid red',
        paddingBottom: '5px'
    }
    return (
        <nav style={navStyles}>
            <NavLink activeStyle={activeStyle} style={navLinkStyle} to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} style={navLinkStyle} to="/friends">Friends</NavLink>
            <NavLink activeStyle={activeStyle} style={navLinkStyle} to="/about">About</NavLink>
        </nav>
    );
};

export default Header;
