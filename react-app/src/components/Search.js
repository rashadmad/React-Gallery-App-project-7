import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

class Search extends Component {
  
  state = {
    searchData: this.props.imageData
  }
  
  render() {
    if (this.state.searchData === undefined) return (<p>loading</p>)
    else
    return (
        <Gallery data= {this.props.imageData} />
    );
  }
}

export default Search;