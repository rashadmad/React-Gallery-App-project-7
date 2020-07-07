import React, { Component } from 'react';

class Photo extends Component {

    render() {
        return (
            <li>
                <img title={this.props.Title} key={this.props.Key} src={this.props.ImageSrc} alt={this.props.Title + " image"} width="500" height="600"></img>
            </li>
        );
    }    
}

export default Photo;