import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField'

let districtRepo = new DistrictRepository(kinderData)
class App extends Component {
  constructor () {
    super()
    this.state = {
      districts: districtRep.findAllMatches()
      districts: {}
    }
  }

  render() {
    return (
      <div id="heading">Welcome To Headcount 2.0 Counting Heads
        <SearchField />
        <CardList districtData={ this.state.districts }/>
      </div>
    );
  }
}

export default App;
