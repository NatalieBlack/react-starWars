import React from 'react';
import ReactDOM from 'react-dom';
import App from '../containers/App/App';
import{Router, Route, hashHistory} from 'react-router';
import Planets from '../containers/planets/planets';

const Routes = () =>
  (<Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="planets" component={Planets} />
    </Router>);

  export default Routes;
