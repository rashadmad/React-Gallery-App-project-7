import React, { Component } from "react";

//import components
import Photo from "./Photo";

class Search extends Component {
  render() {
    return (
      <ul>
        {this.props.imageData.map((data, index) => (
          <Photo Title={data.title} Key={index} imageData={data} />
        ))}
      </ul>
    );
  }
}

export default Search;
