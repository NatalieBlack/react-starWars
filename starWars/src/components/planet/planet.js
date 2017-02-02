import React, {PropTypes} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';


const Planet =(props) => (
  <Card style ={{paddingLeft:'30px', margin:'0 auto'}}>
    <CardHeader style={{color: 'rgb(100,100,100)'}}>Name: {props.name}</CardHeader>
    <CardText>Terrain: {props.terrain}</CardText>
    <CardText>Climate: {props.climate}</CardText>
    <CardText>Population{props.population}</CardText>
  </Card>
);


Planet.propTypes ={
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};

export default Planet;
