import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';

class App extends Component {
  constructor () {
    super()
    this.state = {
      districts: (new DistrictRepository(kinderData)).data
    }
  }

  render() {
    return (
      <div>Welcome To Headcount 2.0
        <CardList districtData={ this.state.districts }/>
      </div>
    );
  }
}

export default App;
