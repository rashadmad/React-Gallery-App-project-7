import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';
import Search from './components/Search';

import _ from 'lodash';
import deepClone from 'lodash';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

class App extends Component {
  constructor(){
    super()
    this.state = {
      requestFailed: true,
      images: null,
      imageData: null,
      tag: "Cats",
      numberOfImages: 16
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
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + this.state.numberOfImages + '&tags=' + this.state.tag + '&format=json&nojsoncallback=1')
    .then(response => {
    const parsedJSON = JSON.parse(JSON.stringify(response));
        this.setState({
          imageData: parsedJSON.data.photos.photo
        })
        return parsedJSON
    })
    .then(data => {
      const imageData = data.data.photos.photo
      let stuff = imageData.map(image => this.generateUrl(image))
        this.setState({
          images: stuff
      })
      return imageData
    })
    .catch(error => {
      console.log(error)
      this.setState({
        requestFailed: true
      })
    });
  }

  render() {
    return (
        <BrowserRouter>
          <Nav clickEvent={this.tag} /> 
          <Switch>
            <Route path="/search" render={ () => <Search searchValue='search value' />} />
            <Route path="/Cats" render={ () => <Search searchValue='Cats' />} />
            <Route path="/Dogs" render={ () => <Search searchValue='Dogs' />} />
            <Route path="/Birds" render={ () => <Search searchValue='Birds' />} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

