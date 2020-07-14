import React, { Component } from "react";

//import components
import Photo from "./Photo";

class Gallery extends Component {
  
  state = {
    searchData: this.props.imageData
  }
  
  render() {
    if (this.state.searchData == undefined) return (<p>loading</p>)
    else
    return (
      <ul>
        {this.state.searchData.map((dataOfImage,index) => 
          <Photo 
            Title= {dataOfImage.title}
            key= {index}
            data= {dataOfImage}
          />
        )}
      </ul>
    );
  }
}

export default Gallery;
