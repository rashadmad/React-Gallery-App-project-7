import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

const searchButtons = ["Cats", "Dogs", "Birds"];

class Nav extends Component {

  render() {
    return (
      <Route>
        <input
          value={this.props.value}
          onChange={this.props.handleValueChange}
          type="search"
          id="site-search"
          name="searchField"
          aria-label="Choose a topic to search for"
        ></input>
        <NavLink to="/search" onClick={this.props.updateTag}>
          Search
        </NavLink>
        <nav>
          <NavLink to={"/" + searchButtons[0]} onClick={this.props.pickAnimal}>{searchButtons[0]}</NavLink>
          <NavLink to={"/" + searchButtons[1]} onClick={this.props.pickAnimal}>{searchButtons[1]}</NavLink>
          <NavLink to={"/" + searchButtons[2]} onClick={this.props.pickAnimal}>{searchButtons[2]}</NavLink>
        </nav>
      </Route>
    );
  }
}

export default Nav;
