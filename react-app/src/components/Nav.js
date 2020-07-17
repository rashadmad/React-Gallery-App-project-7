import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";


const searchButtons = ["Cats", "Dogs", "Birds"];

class Nav extends Component {

  render() {
    return (

      <Route>
        <header>
          <div className="search-form">
            <input
              value={this.props.value}
              onChange={this.props.handleValueChange}
              type="search"
              id="site-search"
              name="searchField"
              aria-label="Choose a topic to search for"
            ></input>
          </div>
          <NavLink to="/search">
            <button onClick={this.props.searchButtonClick}>
            <FaSistrix />
            </button>
          </NavLink>
          <nav className="main-nav">
            <NavLink to={"/" + searchButtons[0]} onClick={this.props.pickAnimal}>{searchButtons[0]}</NavLink>
            <NavLink to={"/" + searchButtons[1]} onClick={this.props.pickAnimal}>{searchButtons[1]}</NavLink>
            <NavLink to={"/" + searchButtons[2]} onClick={this.props.pickAnimal}>{searchButtons[2]}</NavLink>
          </nav>
        </header>
      </Route>
    );
  }
}

export default Nav;
