import React from 'react';
import './App.css';

// import components
import Nav from './components/Nav';
import Photo from './components/Photo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <ul>
        <Photo />
      </ul>
    </div>
  );
}

export default App;
