import React, { Component } from "react";

//import components
import Photo from "./Photo";

class Gallery extends Component {
  
  state = {
    searchData: this.props.imageData
  }
  
  render() {
    if (this.state.searchData == undefined) return (<p>loading</p>)
    if (this.state.searchData != undefined)
    return (
      <ul>
        {
        <Photo 
        Title= {this.state.searchData[0].title}
        Key= {0}
        data= {this.state.searchData[0]}
        />
      }
      </ul>
    );
  }
}

export default Gallery;
