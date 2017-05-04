import React from 'react';
import Card from '../../src/Card.js';
import { shallow, mount } from 'enzyme';

describe('Card Test', () => {

  it('1. has a class of district-card', () => {
    const cardInfo = {
      location: '',
      data: []
    }
    const wrapper = shallow(<Card district={cardInfo} />)

    expect(wrapper.find('.district-card')).toBeTruthy()
  });

  it('2. have a class of year-data', () => {
    const cardInfo = {
      location: '',
      data: []
    }
    const wrapper = shallow(<Card district={cardInfo} />)

    expect(wrapper.find('.year-data')).toBeTruthy()
  });

});
