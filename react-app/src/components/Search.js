import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Search extends Component {
  
  state = {
    searchData: this.props.imageData
  }
  
  render() {
    return (
        <Gallery data= {this.state.searchData} />
    );
  }
}

export default Search;