import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Search extends Component {
  
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.searchedTerm}</h1>
        <div className="photo-container">
          <Gallery />
        </div>  
      </React.Fragment>
    );
  }
}

export default Search;