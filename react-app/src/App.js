import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';

// routes
import Search from './components/Search';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';
import PageNotFound from './components/PageNotFound';

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
      //array of image url
      images: null,
      //raw json data
      imageData: null,
      //the designated item to pull from the api
      tag: "Cats",
      numberOfImages: 16,
      //input field value
      value: ''
    }
  }  


  searchApi = () => {
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + this.state.numberOfImages + '&tags=' + this.state.tag + '&format=json&nojsoncallback=1')
    .then(response => {
      console.log('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + this.state.numberOfImages + '&tags=' + this.state.tag + '&format=json&nojsoncallback=1')
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

  //handles changes for the item being searched
  updateTag = () => {
    this.setState( prevState => {
      return {
        tag: prevState.tag = this.state.value
      }
    })
    this.searchApi();
  }
  //when a search button is selected this triggers and communicates 
  pickAnimal = (event) => {
    this.setState({
      tag: event.target.innerHTML
    }); 
    this.searchApi();
  }
  //manipulates state through the input field
  handleValueChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };
  //creates a url from the request
  generateUrl = (arrayItem) => {
    //example generated url: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg  
    return 'https://farm' + arrayItem.farm + '.staticflickr.com/' + arrayItem.server + '/' + arrayItem.id + '_' + arrayItem.secret + '.jpg'
  } 

  render() {
    return (
        <BrowserRouter>
          <Nav value={this.state.value} handleValueChange={this.handleValueChange} updateTag={this.updateTag} pickAnimal={this.pickAnimal}/> 
          <Switch>
            <Route exact path="/" render={ () => <Search images= {this.state.images} />} />
            <Route path="/search" render={ () => <Search image= {this.state.imageData} />} />
            <Route path="/Cats" render={ () => <Cats image= {this.state.imageData} />} />
            <Route path="/Dogs" render={ () => <Dogs image= {this.state.imageData} />} />
            <Route path="/Birds" render={ () => <Birds image= {this.state.imageData} />} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

