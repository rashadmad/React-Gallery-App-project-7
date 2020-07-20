import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Search extends Component {

  render() {
    return (
      <React.Fragment>
        <h1>Search</h1>
        <div className="photo-container">
          <Gallery applicationState={this.props.applicationState.requestIncomplete} />
        </div>  
      </React.Fragment>
    );
  }
}

export default Search;