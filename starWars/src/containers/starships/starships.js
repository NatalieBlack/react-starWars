import React, {Component} from 'react';
import $ from 'jquery';
import Starship from '../../components/starship/starship';
export default class Starships extends Component{

  STARSHIPS_LIST_URL = "http://swapi.co/api/starships";

  state = {
    nextUrl: null,
    starshipList: [],
  }

  componentDidMount(){
    this.getStarships();
  }

  getStarships(overWriteURL){
    $.get(overWriteURL ? overWriteURL : this.STARSHIPS_LIST_URL)
    .then(res => this.setState({
      starshipList: this.state.starshipList.concat(res.results),
      nextUrl: res.next,

    }));
  }

  render() {
    return(
      <div>
        <h2>Hi there we are starships</h2>

      {this.state.starshipList.map(starship =>
        <Starship
          key={starship.name}
          name={starship.name}
          model={starship.model}
          passengers={starship.passengers}
          crew={starship.crew}
      />

      )}
    </div>)
  }
}
