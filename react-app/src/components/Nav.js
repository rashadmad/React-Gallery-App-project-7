import React, { Component } from 'react';

class Nav extends Component {

    clickEvent = () => {
        this.props.clickEvent()
    }

    render() { 
        return (
            <nav>
                <input type="text" placeholder="Search.."></input>
                <button onClick={this.clickEvent()}>Cats</button> 
                <button onClick={this.clickEvent()}>Dogs</button> 
                <button onClick={this.clickEvent()}>Birds</button> 
            </nav>
        )
    }
}

export default Nav;
