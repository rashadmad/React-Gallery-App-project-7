import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';

// routes
import Search from './components/Gallery';
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
      //raw json data
      imageData: null,
      //the designated item to pull from the api
      tag: "Cats",
      numberOfimageList: 16,
      //input field value
      value: ''
    }
  }  

  searchApi = () => {
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + this.state.numberOfimageList + '&tags=' + this.state.tag + '&format=json&nojsoncallback=1')
    .then(response => {
    const parsedJSON = JSON.parse(JSON.stringify(response));
        this.setState({
          imageData: parsedJSON.data.photos.photo
        })
        return parsedJSON
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

  render() {
    return (
        <BrowserRouter>
          <Nav value={this.state.value} handleValueChange={this.handleValueChange} updateTag={this.updateTag} pickAnimal={this.pickAnimal}/> 
          <Switch>
            <Route exact path="/" render={ () => <Search imageData= {this.state.imageData} />} />
            <Route path="/search" render={ () => <Search imageData= {this.state.imageData} />} />
            <Route path="/Cats" render={ () => <Cats imageData= {this.state.imageData} />} />
            <Route path="/Dogs" render={ () => <Dogs imageData= {this.state.imageData} />} />
            <Route path="/Birds" render={ () => <Birds imageData= {this.state.imageData} />} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;

