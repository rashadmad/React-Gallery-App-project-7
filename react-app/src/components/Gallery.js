import React, { Component } from "react";

//import components
import Photo from "./Photo";

class Gallery extends Component {
  
  render() {
    console.log(this.props.data)
    return (
      <ul>
        {this.props.data.map((dataOfImage,index) => 
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
