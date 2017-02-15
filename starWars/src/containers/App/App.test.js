import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ expect } from 'chai';
import { shallow } from 'enzyme';
import {Link} from 'react-router';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
