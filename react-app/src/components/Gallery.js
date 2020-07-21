import React, { Component } from "react";

//import components
import Photo from "./Photo";

//displays when the query made in the search does not get any results
const queryNotFound = () => {
  return <h3>Sorry your query did not bring back any results</h3>;
}

//displays when the request has not completed yet
const Loading = () => {
  return <h3>Sorry your query did not bring back any results</h3>;
}

class Gallery extends Component {

  render() {
    if(!this.props.applicationState.requestIncomplete)return (queryNotFound())
    else
    return ( 
      <ul>
        <queryNotFound />
      </ul>
    )
  }
}

export default Gallery;
