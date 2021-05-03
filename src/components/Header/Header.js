import React from 'react';
import Navbar from './Navbar/Navbar';
import Summary from './Summary/Summary';
import './Header.css';

const Header = () => {

    return (
        <div className="header" id="home">
            <Navbar></Navbar>
            <Summary></Summary>
        </div>
    );
};

export default Header;