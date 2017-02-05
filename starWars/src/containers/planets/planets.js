import React, {Component} from 'react';
import $ from "jquery";
import Planet from '../../components/planet/planet';

export default class Planets extends Component {

  PLANET_LIST_URL = "http://swapi.co/api/planets";

  state = {
      nextUrl: null,
      planetList: [],
      searchResult:[],
    };



  componentDidMount(){
    this.getPlanets();
  }

  getPlanets(overWriteURL){
    $.get(overWriteURL ? overWriteURL : this.PLANET_LIST_URL)
    .then(res => this.setState({
      planetList: this.state.planetList.concat(res.results),
      nextUrl: res.next,
      searchResult: this.state.planetList.concat(res.results),
    }));
  }

  searchClimate(){
    let climateInput = $(".climateSearchBox").val();
    let climateSearchMatch = this.state.planetList.filter(cliMatch => cliMatch.climate === climateInput);
    this.setState({searchResult: climateSearchMatch});

  }

  render(){
    return (
      <div>
        <h2 style={{textAlign: 'center',padding:'20px'}}>Hi it's me planet list</h2>
        <form>
          <input className="climateSearchBox"></input> <button onClick={this.searchClimate.bind(this)}>search Climate</button>
        </form>

        {this.state.searchResult.map(planet =>
          <Planet
            key={planet.name}
            name={planet.name}
            climate={planet.climate}
            terrain={planet.terrain}
            population={planet.population}
          />
        )}
{this.state.nextUrl ? <button onClick={() => this.getPlanets(this.state.nextUrl)}>load more planets</button> : <h5>No more planets to show</h5>}

      </div>)

  }

}
