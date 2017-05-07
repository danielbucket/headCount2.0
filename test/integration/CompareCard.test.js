import React from 'react';
import CompareCard from '../../src/CompareCard.js';
import { shallow, mount } from 'enzyme';
import DistrictRepository from './../../src/helper.js'
import kinderData from '../../data/kindergartners_in_full_day_program.js';

let cardInfo;
let mockArr;
let districtRepository;

describe('Card Test', () => {
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
    const wrapper = mount(<CompareCard  districtClass={ districtRepository }
                                        cardsToCompare={ mockArr }/>)

    expect(wrapper.find('.compare-card').length).toBe(1)
  });

  it.skip('3. have a class of year-data', () => {
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.year-data')).toBeTruthy()
  });

  it.skip('4. should create a blank card if "cardBlank" prop is true', () => {
    const wrapper = shallow(<Card district={cardInfo}
                                  cardBlank={ true }/>)

    expect(wrapper.find('.blank-card')).toBeTruthy()
  });

  it.skip('5. should assign a class of "low-percent" if the data is less than 0.5', () => {
    const cardInfo = {
      data:{'year1': 0.342, 'year2': 0.545}, location: 'location1',
    }
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardBlank={ false }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.low-percent').length).toBe(1)
  });

  it.skip('6. selected cards should receive a class of "selected"', () => {
    const cardInfo = {
      location: 'Colorado',
      data: []
    }
    const wrapper = shallow(<Card district={cardInfo}
                                  cardBlank={ false }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.selected').length).toBe(1)
  });

});
