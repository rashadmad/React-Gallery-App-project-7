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
  constructor() {
    super()
    this.state = {
      //communicates to state if a response has failed
      requestFailed: true,
      //raw json data
      imageData: null,
      //the default item to pull from the api
      tag: 'cats'
    }
  }

  searchApi = (amountToSearch, itemToSearch) => {
    Axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + amountToSearch + '&tags=' + itemToSearch + '&format=json&nojsoncallback=1')
      .then(response => {
        this.setState({
          imageData: response.data.photos.photo,
          requestFailed: false
        })
        return response
      })
      .catch(error => {
        console.log(error)
        this.setState({
          requestFailed: true
        })
      });
  }

  //handles changes for the item being searched
  searchButtonClick = () => {
    this.searchApi(16, this.state.tag)
  }

  //when a search button is selected this triggers and communicates 
  pickAnimal = (event) => {
      this.searchApi(16, event.target.innerHTML);
  }
  
  //manipulates state through the input field
  handleValueChange = (event) => {
    this.setState({
      tag: event.target.value,
    });
  };

  render() {
    return (
      <BrowserRouter>
          <Provider value={{
            applicationState: this.state
          }}>
            <Nav value={this.state.value} handleValueChange={this.handleValueChange} searchButtonClick={this.searchButtonClick} pickAnimal={this.pickAnimal} />
            <Switch>
              <Route exact path="/" render={() => <Search searchedTerm={this.state.tag}/>} />
              <Route path="/search" render={() => <Search />} />
              <Route path="/Cats" render={() => <Cats />} />
              <Route path="/Dogs" render={() => <Dogs />} />
              <Route path="/Birds" render={() => <Birds />} />
              <Route path="/" component={PageNotFound} />
            </Switch>
          </Provider>
      </BrowserRouter>
    );
  }
}

export default App;

