import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Dogs extends Component {
  
  render() {
    return (
      <React.Fragment>
        <h1>Dog Images</h1>
        <Gallery />
      </React.Fragment>
    );
  }
}

export default Dogs;