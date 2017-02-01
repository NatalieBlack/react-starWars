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
      planetList: this.state.planetList.concat(res.results),
      nextUrl: res.next
    }));
  }

  render(){
    return (
      <div>
        <h2>Hi it's me planet list</h2>

        <div>{this.state.planetList.map(planet => <div key={planet.name}>{planet.name}</div>)}</div>
      </div>)

  }

}
