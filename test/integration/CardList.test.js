import React from 'react';
import CardList from '../../src/CardList';
import { shallow, mount } from 'enzyme';

import DistrictRepository from '../../src/helper';
import kinderData from '../../data/kindergartners_in_full_day_program.js';

const stub = new DistrictRepository(kinderData)
console.log(stub);
let wrapperShallow;
let wrapperMount;

describe('Testing CardList', () => {

  beforeEach(() => {
     wrapperShallow = shallow(<CardList districtData={ {} }/>)
     wrapperMount = mount(<CardList />)
    //  searchField = wrapperMount.find(‘input[type=“text”]‘)
    //  submitButton = wrapperMount.find(‘input[type=“submit”]‘)
   })

  it.only('should do a thing', () => {
  })
})
