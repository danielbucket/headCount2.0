import React from 'react';
import CardList from '../../src/CardList';
import { shallow, mount } from 'enzyme';

import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const stub = new DistrictRepository(kinderData)

describe('CardList', () => {

  it('1. should have a class named card-container', () => {
    const wrapper = shallow(<CardList districtData={{key: 'value'}}/>)

    expect(wrapper.find('.card-container')).toBeTruthy()
  })

  it('2. should have a 3 district-card classes when passed info for 3 cards', () => {
    const mockData = {
      location1: {data:{'year1': 0.342, 'year2': 0.545}, location: 'location1'},
      location2: {data:{'year1': 0.342, 'year2': 0.545}, location: 'location2'},
      location3: {data:{'year1': 0.342, 'year2': 0.545}, location: 'location3'}
    }
    const wrapper = mount(<CardList districtData={ mockData }/>)

    expect(wrapper.find('.district-card').length).toBe(3)
  })

})
