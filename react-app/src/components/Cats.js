import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Cats extends Component {

  componentDidMount(){
    this.props.searchApi(24,"Cats")
  }
  
  render() {
    return (
      <React.Fragment>
        <h1>Cat Images</h1>
        <div className="photo-container">
          <Gallery searchApi={this.props.searchApi} applicationState={this.props.applicationState} />
        </div>  
      </React.Fragment>
    );
  }
}

export default Cats;