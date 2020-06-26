import React, { Component } from 'react';

class Photo extends Component {

      state = {
        imageUrl: "https://via.placeholder.com/150"
      }

    render() {
        return (
            <li>
            <img src={this.props.imageUrl} alt="placeholder" width="500" height="600"></img>
            </li>
        );
    }    
}

export default Photo;