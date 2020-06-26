import React from 'react';
import logo from './logo.svg';
import './App.css';

// import components
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <ul>
        {/* add the photo components here */}
      </ul>
    </div>
  );
}

export default App;
