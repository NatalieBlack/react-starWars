import React, {Component} from 'react';
import $ from 'jquery';
import Starship from '../../components/starship/starship';
export default class Starships extends Component{

  STARSHIPS_LIST_URL = "http://swapi.co/api/starships";
  

  state = {
    nextUrl: null,
    starshipList: [],
    searchResult: [],
  }

  componentDidMount(){
    this.getStarships();
  }

  getStarships(overWriteURL){
    $.get(overWriteURL ? overWriteURL : this.STARSHIPS_LIST_URL)
    .then(res => this.setState({
      starshipList: this.state.starshipList.concat(res.results),
      nextUrl: res.next,
      searchResult: this.state.starshipList.concat(res.results),

    }))};

  searchStarship(){
    let searchStarshipName =$(".starshipSearchBox").val()
    let starshipSearchMatch = this.state.starshipList.filter(nameMatch => nameMatch.name === searchStarshipName);
    this.setState({
      searchResult: starshipSearchMatch
    })

  };


  render() {
    return(
      <div>
        <h2 style={{textAlign:'center', padding:'20px'}}>Hi there we are starships</h2>

        <form>
          <input className="starshipSearchBox"></input> <button onClick={this.searchStarship.bind(this)}>search starships</button>
        </form>
      {this.state.searchResult.map(starship =>
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
