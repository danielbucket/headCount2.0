import React from 'react';
import CompareCard from '../../src/CompareCard.js';
import { shallow, mount } from 'enzyme';
import DistrictRepository from './../../src/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

let cardInfo;
let mockArr;
let districtRepository;

describe('CompareCard Test', () => {
  beforeEach( () => {
    cardInfo = {data:{'year1': 0.342, 'year2': 0.545}, location: 'location1'}
    mockArr = [{location: 'Colorado'}, {location: 'ACADEMY 20'}];
    districtRepository = new DistrictRepository(kinderData);
  })

  it('1. should have a class of "populate-instructions" if only 1 or 0 cards are selected', () => {
    mockArr = [{location: 'leftCardBlank'}, {location: 'rightCardBlank'}];
    const wrapper = shallow(<CompareCard  districtClass={ cardInfo }
                                          cardsToCompare={ mockArr }/>)

    expect(wrapper.find('.populate-instructions').length).toBe(1)
  });

  it('2. should have a class of "compare-card" if two cards are selected', () => {
    const wrapper = shallow(<CompareCard  districtClass={ districtRepository }
                                          cardsToCompare={ mockArr }/>)

    expect(wrapper.find('.compare-card').length).toBe(1)
  });

});
