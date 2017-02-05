import React, { Component } from 'react';
import {Link} from 'react-router';

import './App.css';

export default class App extends Component {
  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1 style={{padding:'25px'}}>Star Wars!!</h1>
        <ul style={{listStyle:'none',padding:'25px'}}>
          <li style={{paddingBottom:'15px'}}>
            <Link to="/planets">Planets</Link>
          </li>
          <li style={{paddingBottom:'15px'}}>
            <Link to="/starships">Starships</Link>
          </li>
      </ul>
      </div>
    );
  }
}
