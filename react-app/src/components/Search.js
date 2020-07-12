import React, { Component } from 'react';

class Search extends Component {
    render(){
      console.log(this.imageData)
      return (
        <p>
          {this.props.imageData}
        </p>
      )
    }
}

export default Search;
