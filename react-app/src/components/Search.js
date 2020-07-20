import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Search extends Component {
  
  componentDidMount(){
      this.props.searchApi(24, this.props.applicationState.tag)
  }

  render() {
    return (
      <React.Fragment>
        <h1>Search</h1>
        <div className="photo-container">
          <Gallery />
        </div>  
      </React.Fragment>
    );
  }
}

export default Search;