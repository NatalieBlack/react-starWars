import React from 'react';
import { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme'
import { shallow, mount } from 'enzyme';
import Planets from './Planets';

describe('<Planets />', () => {
  it('should fire getPlanets when the button is clicked', () => {
  const wrapper = shallow(<Planets/>);
  wrapper.find('button').simulate('click');

  });
  it('should show a list of planets with the specific climate when search climate is clicked', () => {
    const wrapper = shallow(<Planets/>);
    const planetConatiner = wrapper.instance();
    //const spy = sinon.spy(wrapper.instane(),"searchClimate");

    wrapper.setState({
      planetList:[{name: 'Natalie', climate: 'HOT'}, {name: 'Hisayo', climate:'not as hot as natalie'}]
    })
    let searchBox = wrapper.find('.climateSearchBox')
    searchBox.node.value = 'HOT';
    searchBox.simulate('change', searchBox);


    wrapper.find('#climateSearchButton').simulate('click');
    expect(wrapper.state('searchResult')).to.equal({name: 'Natalie', climate: 'HOT'});


});


});
