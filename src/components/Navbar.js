import React, { Component } from 'react';
import Navitem from './Navitem';

class Navbar extends Component {
    /*
        activeItem get id from Navitem, we bind prop activeBarItem to this function so we can call it from Navitem
    */

    constructor(props) {
        super(props);
        this.state = {
            'NavItemActive': ''
        }
    }

    activeItem = (x) => {
        if (this.state.NavItemActive.length > 0) {
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive': x}, () => {
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    }
    
    render() {
        return (
            <nav>
                <ul>
                    <Navitem item="Home" tolink="/home" activeBarItem={this.activeItem}></Navitem>
                    <Navitem item="About" tolink="/about" activeBarItem={this.activeItem}></Navitem>
                    <Navitem item="Education" tolink="/education" activeBarItem={this.activeItem}></Navitem>
                    <Navitem item="Skills" tolink="/skills" activeBarItem={this.activeItem}></Navitem>
                    <Navitem item="Contact" tolink="/contract" activeBarItem={this.activeItem}></Navitem>
                </ul>
            </nav>
        )
    }
}

export default Navbar;