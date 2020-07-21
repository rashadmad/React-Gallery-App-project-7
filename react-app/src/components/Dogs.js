import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Dogs extends Component {
  
  componentDidMount(){
    this.props.pickAnimal("Dogs")
  }

  render() {
    return (
      <React.Fragment>
        <h1>Dog Images</h1>
        <div className="photo-container">
          <Gallery searchApi={this.props.searchApi} applicationState={this.props.applicationState} />
        </div>  
      </React.Fragment>
    );
  }
}

export default Dogs;