import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';

class App extends Component {
  constructor(){
    super()
    this.state = {
      images: [],
      farms: [],
      severs: [],
      keys: [],
      secrets: []
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
    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return '//https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
  } 
  
  componentDidMount(){
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=24&tags=' + this.tag + '&format=json&nojsoncallback=1')
    .then(response => {
      this.setState({
        images: response.data.photos.photo.map(imageData => this.generateUrl(imageData)),
        farms: response.data.photos.photo.map(farmNum => farmNum.farm),
        severs: response.data.photos.photo.map(farmNum => farmNum.server),
        keys: response.data.photos.photo.map(farmNum => farmNum.id),
        secrets: response.data.photos.photo.map(farmNum => farmNum.secret)
      })
    })
    .catch(error => {
      console.log(error)
    });
  }

  

  render() {
    console.log(this.state.secrets)
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
