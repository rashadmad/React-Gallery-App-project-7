import React, { Component } from "react";

//import components
import Photo from "./Photo";

//displays when the request has not completed yet
const loading = () => {
  return <h3 className="wrapper">loading</h3>;
}

//displays when the request has not completed yet
const requestFailed = () => {
  return <h3 className="wrapper">That query brought back no images.</h3>;
}

class Gallery extends Component {


  render() {
    return ( 
      <ul>
          {
            this.props.applicationState.imageData.map(image =>  
              <Photo 
                Title= {image.title}
                key= {image.id}
                data= {image}
              />)
          }
      </ul>
    )
  }
}

export default Gallery;
