//Navabr on the top of the page with different options

import React, { Component } from 'react';
import {MenuItems} from "./MenuItems";
import './Navbar.css';



class Navbar extends Component{

    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render(){
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><a href="/">Hodophile</a></h1>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href = {item.url}> 
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;