import React, { Component } from 'react';
import './App.css';

import Add from './Components/Add/index.js';
import Remove from './Components/Remove/index.js';
import Contacts from './Components/Contacts/index.js';
import Profile from './Components/Profile/index.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <div className="profile">
          <Profile />
        </div>
        <Contacts />
        <Add />
        <Remove />
      </div>
    );
  }

}

export default App;
