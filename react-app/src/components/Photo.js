import React, { Component } from 'react';
//todo: fix warning | `key` is not a prop.


class Photo extends Component {
//creates a url from the request
generateUrl = (arrayItem) => {
    //example generated url: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return 'https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
    } 
    
    render() {
        return (
            <li>
                <img key={this.props.id} title={this.props.Title}src={this.generateUrl(this.props.data)} alt={this.props.Title + " image"}></img>
            </li>
        );
    }    
}

export default Photo;