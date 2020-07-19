import React, { Component } from 'react';

import './config.js';
import './App.css';

// import components
import Nav from './components/Nav';
import apiKey from './config.js';
import { Provider } from './components/Context'

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
      requestIncomplete: true,
      //raw json data
      imageData: null,
      //the default item to pull from the api
      tag: ''
    }
  }

  componentDidMount(){
    this.searchApi();
  }

  searchApi = (amountToSearch = 24, itemToSearch = "cats") => {
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + apiKey + '&per_page=' + amountToSearch + '&tags=' + itemToSearch + '&format=json&nojsoncallback=1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          imageData: data.photos.photo,
          requestIncomplete: false
        });
      })
      .catch(error => { console.log(error)
        this.setState({
          requestIncomplete: true
        })
      })
  }

  //handles changes for the item being searched
  searchButtonClick = () => {
    this.searchApi(24, this.state.tag)
  }

  //when a search button is selected this triggers and communicates 
  pickAnimal = (event) => {
      this.searchApi(24, event.target.innerHTML);
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

