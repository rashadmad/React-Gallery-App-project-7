import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';
import _ from 'lodash';
import deepClone from 'lodash'

class App extends Component {
  constructor(){
    super()
    this.state = {
      requestFailed: true,
      images: [],
      imageData: []
    }
  }  

  pickAnimal = (animal) => {
    this.setState( prevState => {
      return {
        tag: prevState.tag = animal
      }
    })
  }

  generateUrl = (arrayItem) => {
    //example generated url: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return 'https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
  } 
  
  componentDidMount(){
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=24&tags=' + this.tag + '&format=json&nojsoncallback=1')
    .then(response => {
        this.setState({
          imageData: deepClone(response.data.photo.photos)
        })
    },console.log(this.state.imageData))
    .catch(error => {
      console.log(error)
      this.setState({
        requestFailed: true
      })
    });
  }

  render() {
    if (!this.state.requestFailed) return <p>Request failed</p>
    if (this.state.imageData)
    console.log(this.state.imageData)
    return (
        <div className="App">
          <header className="App-header">3
            <Nav clickEvent={this.tag} /> 
          </header>

        </div>  
    );
  }
}

export default App;
