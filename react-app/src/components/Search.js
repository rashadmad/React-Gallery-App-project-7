import React, { Component } from "react";

//import components
import Gallery from "./Gallery";

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
        { 
          this.props.applicationState.loading ? (
            <h3 className="wrapper">Loading</h3>
          ) : this.props.applicationState.requestFailed ? (
            <h3 className="wrapper">No images match your query</h3>
          ) : this.props.applicationState.requestComplete ? (
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