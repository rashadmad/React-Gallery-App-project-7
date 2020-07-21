import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Nav from './components/Nav';
import apiKey from './config.js';

// routes
import Search from './components/Search';
import Cats from './components/Cats';
import Dogs from './components/Dogs';
import Birds from './components/Birds';
import PageNotFound from './components/PageNotFound';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      //communicates to state if a response has failed
      requestIncomplete: false,
      //takes in the data from the request
      imageData: null,
      //the default item to pull from the api
      tag: '',
      //need to chart when the request has started but has not concluded
      loading: true
    }
  }

  searchApi = (amountToSearch = 24, itemToSearch = "cats") => {
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + amountToSearch + '&tags=' + itemToSearch + '&format=json&nojsoncallback=1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          imageData: data.photos.photo,
        });
      })
      .catch(error => { console.log(error)
        this.setState({
          requestFailed: true,
          loading: false
        })
      })
      .finally(data => { 
        this.setState({
          requestFailed: false,
          loading: false
        })
        console.log("request complete:" + data)
      });
  }

  //handles changes for the item being searched
  searchButtonClick = () => {
    this.searchApi(24, this.state.tag)
  }

  //when a search button is selected this triggers and communicates 
  pickAnimal = (animal) => {
    this.setState({
      tag: animal
    });
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
          <Nav value={this.state.value} handleValueChange={this.handleValueChange} searchButtonClick={this.searchButtonClick} pickAnimal={this.pickAnimal} />
          <Switch>
            <Route exact path="/" render={() => <Search searchApi={this.searchApi} applicationState={this.state} />} />
            <Route path="/search" render={() => <Search searchApi={this.searchApi} applicationState={this.state} />} />
            <Route path="/Cats" render={() => <Cats searchApi={this.searchApi} applicationState={this.state} pickAnimal={this.pickAnimal} />} />
            <Route path="/Dogs" render={() => <Dogs searchApi={this.searchApi} applicationState={this.state} pickAnimal={this.pickAnimal} />} />
            <Route path="/Birds" render={() => <Birds searchApi={this.searchApi} applicationState={this.state} pickAnimal={this.pickAnimal} />} />
            <Route path="/" component={PageNotFound} />
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

