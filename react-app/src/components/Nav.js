import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

const searchButtons = ["Cats", "Dogs", "Birds"];

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      value: "hello",
    };
  }
  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value);
  };

  render() {
    return (
      <Route>
        <input
          value={this.state.value}
          onChange={this.handleValueChange}
          type="search"
          id="site-search"
          name="searchField"
          aria-label="Choose a topic to search for"
        ></input>
        <NavLink to="/search" onClick={this.onSearch}>
          Search
        </NavLink>
        <nav>
          <NavLink to={"/" + searchButtons[0]}>{searchButtons[0]}</NavLink>
          <NavLink to={"/" + searchButtons[1]}>{searchButtons[1]}</NavLink>
          <NavLink to={"/" + searchButtons[2]}>{searchButtons[2]}</NavLink>
        </nav>
      </Route>
    );
  }
}

export default Nav;
