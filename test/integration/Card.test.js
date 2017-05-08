import React from 'react';
import Card from '../../src/Card.js';
import { shallow, mount } from 'enzyme';

let cardInfo;
let mockArr;

describe('Card Test', () => {

  beforeEach( () => {
     cardInfo = { location: '', data: [] };
     mockArr = [{location: 'Colorado'}, {location: 'rightCardBlank'}];
  })

  it('1. has a class of district-card', () => {
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.district-card')).toBeTruthy()
  });

  it('2. have a class of year-data', () => {
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.year-data')).toBeTruthy()
  });

  it('3. should create a blank card if "cardBlank" prop is true', () => {
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardBlank={ true }/>)

    expect(wrapper.find('.blank-card')).toBeTruthy()
  });

  it('4. should assign a class of "low-percent" if the data is less than 0.5', () => {
    const cardInfo = {
      data:{'year1': 0.342, 'year2': 0.545}, location: 'location1',
    }
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardBlank={ false }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.low-percent').length).toBe(1)
  });

  it('5. selected cards should receive a class of "selected"', () => {
    const cardInfo = {
      location: 'Colorado',
      data: []
    }
    const wrapper = shallow(<Card district={ cardInfo }
                                  cardBlank={ false }
                                  cardSelected={ mockArr }/>)

    expect(wrapper.find('.selected').length).toBe(1)
  });

  it('6. when clicked, a card should receive a class of "selected"', () => {
    const cardInfo = {
      location: 'Colorado',
      data: []
    }
    mockArr = [{location: 'leftCardBlank'}, {location: 'rightCardBlank'}];
    const mockSelectClick = jest.fn();

    const wrapper = mount(<Card district={ cardInfo }
                                handleClick={ mockSelectClick }
                                cardBlank={ false }
                                cardSelected={ mockArr }/>)

    expect(wrapper.find('.selected').length).toBe(0);

    wrapper.find('.district-card').simulate('click');

    expect(mockSelectClick).toHaveBeenCalledTimes(1);
    expect(mockSelectClick).toHaveBeenCalledWith( cardInfo );
  });

});
