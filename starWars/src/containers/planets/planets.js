import React, {Component} from 'react';
import $ from "jquery";
import Planet from '../../components/planet/planet';

export default class Planets extends Component {

  PLANET_LIST_URL = "http://swapi.co/api/planets";

  state = {
      nextUrl: null,
      planetList: [],
    };



  componentDidMount(){
  this.getPlanets();
  }

  getPlanets(overWriteURL){
    $.get(overWriteURL ? overWriteURL : this.PLANET_LIST_URL)
    .then(res => this.setState({
      planetList: this.state.planetList.concat(res.result),
      nextUrl: res.next
    }));
  }

  render(){
    return (<div>
      <h2>Planet List</h2>
          {this.state.planetList.map(planet => <div key={planet.name}>{planet.name}</div>)}
    </div>
    );
  }

}
