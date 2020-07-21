import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Birds extends Component {

  componentDidMount(){
    this.props.pickAnimal("Birds")
  }

    render() {
        return (
          <React.Fragment>
            <h1>Bird Images</h1>
            <div className="photo-container">
              <Gallery searchApi={this.props.searchApi} applicationState={this.props.applicationState} />
            </div>  
          </React.Fragment>
        );
      }
    }

export default Birds;
