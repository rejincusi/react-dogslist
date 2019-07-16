import React, { Component } from 'react';
import DogsListContainer from './components/DogsListContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <DogsListContainer />
        </main>
      </div>
    );
  }
}

export default App;
