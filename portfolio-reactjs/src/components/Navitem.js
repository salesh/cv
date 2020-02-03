import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Navitem extends Component {
    /*
        Link is component from react-router-dom that get "to" where should go Link like href
    */
    render() {
        return (
            <li id={this.props.item}>
                <Link to={this.props.tolink} onClick={this.props.activeBarItem.bind(this, this.props.item)}>
                    {this.props.item}
                </Link>
            </li>
        )
    }
}

export default Navitem;