import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App/App';
import{Router, Route, hashHistory} from 'react-router';
import Planets from '../containers/planets/planets';
import Starships from '../containers/starships/starships';

const Routes = () =>
  (<Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="planets" component={Planets} />
      <Route path="starships" component={Starships} />
    </Router>);

  export default Routes;
