import React, {Component} from 'react';
import $ from 'jquery';

export default class Starships extends Component{

  STARSHIPS_LIST_URL = "http://swapi.co/api/starships";

  state = {
    nextUrl: null,
    starshipsList: [],
  }

  componentDidMount(){
    this.getStarships();
  }

  getStarships(overWriteURL){
    $.get(overWriteURL ? overWriteURL : this.STARSHIPS_LIST_URL)
    .then(res => this.setState({
      starshipsList: this.state.starshipsList.concat(res.results),
      nextUrl: res.next,

    }));

  }
}
