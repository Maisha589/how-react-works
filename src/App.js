import React, { Component } from 'react';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

class App extends Component {
  render() {
    return (
      <div className="App">
<Device name="Iphone" price="15000"></Device>
<Watch></Watch>
      </div>
    );
  }
}

export default App;
