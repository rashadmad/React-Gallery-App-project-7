import React, { Component } from 'react';

class Nav extends Component {

    clickMe = () => {
        this.props.clickMe()
    }

    render() { 
        return (
            <nav>
                <input type="text" placeholder="Search.."></input>
                <button onClick={this.clickMe()}>Cats</button> 
                <button onClick={this.clickMe()}>Dogs</button> 
                <button onClick={this.clickMe()}>Birds</button> 
            </nav>
        )
    }
}

export default Nav;
