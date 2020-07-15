import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Cats extends Component {
  
  render() {
    return (
        <React.Fragment>
          <h1>Cat Images</h1>
          <Gallery />
        </React.Fragment>
    );
  }
}

export default Cats;