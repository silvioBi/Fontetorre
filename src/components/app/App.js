import React, { Component } from 'react';
import './App.css';

import TopMenu from '../topMenu/TopMenu';

class App extends Component {
  render() {
    return (
      <div>
        <div id="stripes">
        </div>
        <TopMenu />
      </div>
    );
  }
}

export default App;
