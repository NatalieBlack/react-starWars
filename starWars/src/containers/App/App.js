import React, { Component } from 'react';
import {Link} from 'react-router';

import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
          <h1>Star Wars</h1>
          <Link to="/planets">Planets</Link>
      </div>
    );
  }
}
