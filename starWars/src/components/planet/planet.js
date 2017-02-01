import React, {PropTypes} from 'react';


const Planet =(props) => (
  <div>
    <p>Name: {props.name}</p>
    <p>Terrain: {props.terrain}</p>
    <p>Climate: {props.climate}</p>
    <p>Population{props.population}</p>
  </div>
);


Planet.propTypes ={
  name: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
};

export default Planet;
