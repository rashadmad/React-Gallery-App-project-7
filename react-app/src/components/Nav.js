import React, { Component } from 'react';
import {
    BrowserRouter,
    Route,
    NavLink
  } from 'react-router-dom';

const searchButtons = [
    "Cats",
    "Dogs",
    "Birds"
]
class Nav extends Component {

    clickEvent = (event) => {
    }

    render() { 
        return (
            <BrowserRouter> 
                <input type="search" id="site-search" name="searchField" aria-label="Choose a topic to search for"></input>
                <NavLink to="/search">Search</NavLink>
                <nav>
                    <NavLink to={'/' + searchButtons[0]} onClick={this.clickEvent}>{searchButtons[0]}</NavLink> 
                    <NavLink to={'/' + searchButtons[1]} onClick={this.clickEvent}>{searchButtons[1]}</NavLink> 
                    <NavLink to={'/' + searchButtons[2]} onClick={this.clickEvent}>{searchButtons[2]}</NavLink> 
                </nav> 
            </BrowserRouter> 
        )
    }
}

export default Nav;
