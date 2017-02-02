import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


const Starship=(props) =>(
  <Card style={{paddingLeft:'30px', margin:'0 auto'}}>
    <CardHeader style={{color: 'rgb(100,100,100)'}}>Name: {props.name}</CardHeader>
    <CardText>Model: {props.model}</CardText>
    <CardText>Passengers: {props.passengers}</CardText>
    <CardText>Crew: {props.crew}</CardText>
  </Card>
);

Starship.propTypes={
  name:PropTypes.string.isRequired,
  model:PropTypes.string.isRequired,
  passengers:PropTypes.string.isRequired,
  crew:PropTypes.string.isRequired,
}



export default Starship;
