import React, { Component } from 'react';
import './App.css';

// Component Imports
import AddTemplate from './components/AddTemplate';
import GenerateMessage from './components/GenerateMessage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h3>Templated Messaging</h3>
        </div>
        <GenerateMessage />
        <AddTemplate />
      </div>
    );
  }
}

export default App;
