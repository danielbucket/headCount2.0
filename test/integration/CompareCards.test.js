import React from 'react';
import CompareCards from '../../src/CompareCards.js';
import { shallow, mount } from 'enzyme';
import DistrictRepository from './../../src/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

let cardInfo;
let mockArr;
let districtRepository;

describe('CompareCards Test', () => {
  beforeEach( () => {
    cardInfo = {data:{'year1': 0.342, 'year2': 0.545}, location: 'location1'}
    mockArr = [{location: 'Colorado'}, {location: 'ACADEMY 20'}];
    districtRepository = new DistrictRepository(kinderData);
  })

  it('1. should display 1 card if passed 1 card', () => {
    mockArr = [
      {location: 'Colorado', data: {'year1': 0.342, 'year2': 0.545}},
      {location: 'rightCardBlank'}
    ];
    const wrapper = mount(<CompareCards districtClass={ cardInfo }
                                        cardsToCompare={ mockArr }
                                        leftCardBlank={ false }
                                        rightCardBlank={ true }/>)

    expect(wrapper.find('.district-card').length).toBe(1)
  });

  it('2. should display 2 cards if passed 2 cards', () => {
    mockArr = [
      {location: 'Colorado', data: {'year1': 0.342, 'year2': 0.545}},
      {location: 'ACADEMY 20', data: {'year1': 0.342, 'year2': 0.545}}
    ];
    const wrapper = mount(<CompareCards districtClass={ districtRepository }
                                        cardsToCompare={ mockArr }
                                        leftCardBlank={ false }
                                        rightCardBlank={ false }/>)

    expect(wrapper.find('.district-card').length).toBe(2)
  });

});
