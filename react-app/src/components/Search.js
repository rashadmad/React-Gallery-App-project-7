import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

//<Gallery searchApi={this.searchApi} applicationState={this.props.applicationState.requestIncomplete}/>

//displays when the query made in the search does not get any results
const start = () => {
  return <h3 className="wrapper">Search through Flickr's database for images</h3>;
}

//displays when the query made in the search does not get any results
const queryNotFound = () => {
  return <h3 className="wrapper">Sorry your query did not bring back any results</h3>;
}

class Search extends Component {

  componentDidMount(){
    this.props.searchApi(24,this.props.applicationState.tag)
    this.props.applicationState.searchComponentHasMounted = true
  }

  componentWillUnmount(){
    this.props.applicationState.searchComponentHasMounted = false
  }

  render() {
    console.log()
    return (
      <React.Fragment>
        <h1>Search</h1>
        <div className="photo-container">
        {this.props.applicationState.requestComplete ? (
          <Gallery searchApi={this.props.searchApi} applicationState={this.props.applicationState}/>
          ) : (
            <h3 className="wrapper">Search flickr database</h3>
          )
        }
        </div>  
      </React.Fragment>
    );
  }
}

export default Search