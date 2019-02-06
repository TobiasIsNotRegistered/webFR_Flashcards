import React, { Component } from 'react';



const Header = ({ title, subtitle }) => {
    return (<div className="header">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
    </div>)
}

export default Header;
