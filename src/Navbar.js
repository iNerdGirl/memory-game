import React, {Component} from 'react';
import './Navbar.css';

const Navbar = ({onNewGame}) => (
    <nav className='nav-bar'>
        <h3>Memory Game</h3>
        <a onClick={onNewGame}>New Game</a>
    </nav>
);


export default Navbar;