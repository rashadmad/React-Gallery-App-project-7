import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Axios from 'axios';
import Nav from './components/Nav';
import Photo from './components/Photo';
import apiKey from './config.js';
import { Provider } from './components/Context'

// routes
import Search from './components/Search';
import Gallery from './components/Gallery';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';
import PageNotFound from './components/PageNotFound';

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
      //communicates to state if a response has failed
      requestFailed: true,
      //raw json data
      imageData: null,
      //the default item to pull from the api
      tag: '',
      //input field value
      value: ''
    }
  }  

  componentDidMount(){
    this.searchApi(16,this.state.tag);
  }

  searchApi = (amountToSearch,itemToSearch,) => {
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + amountToSearch + '&tags=' + itemToSearch + '&format=json&nojsoncallback=1')
    .then(response => {
    const parsedJSON = JSON.parse(JSON.stringify(response));
        this.setState({
          imageData: parsedJSON.data.photos.photo,
          requestFailed: false
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
    },this.searchApi(16,this.state.tag))
  }
  //when a search button is selected this triggers and communicates 
  pickAnimal = (event) => {
    this.setState({
      tag: event.target.innerHTML
    },this.searchApi(16,this.state.tag));
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
        <Provider value={this.state}>
          <Nav value={this.state.value} handleValueChange={this.handleValueChange} updateTag={this.updateTag} pickAnimal={this.pickAnimal}/> 
          <Switch>
            <Route exact path="/" render={ () => <Search imageData= {this.state.imageData} />} />
            <Route path="/search" render={ () => <Search imageData= {this.state.imageData} />} />
            <Route path="/Cats" render={ () => <Cats imageData= {this.state.imageData} />} />
            <Route path="/Dogs" render={ () => <Dogs imageData= {this.state.imageData} />} />
            <Route path="/Birds" render={ () => <Birds imageData= {this.state.imageData} />} />
            <Route path="/" component={PageNotFound} />
          </Switch>
        </Provider>
        </BrowserRouter>
    );
  }
}

export default App;

