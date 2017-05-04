import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField'

class App extends Component {
  constructor () {
    super()
    this.state = {
      districts: '',
      // card1: '',
      // card2: ''
    }
  }

  componentDidMount () {
    this.setState({
      districts: new DistrictRepository(kinderData).data
    })
  }

  handleChange (searchFieldValue) {
    this.setState({
      districts: (new DistrictRepository(kinderData)).findAllMatches(searchFieldValue)
    })
  }

  render() {
    return (
      <div id="heading">Welcome To Headcount 2.0 Counting Heads
        <SearchField onChange={ this.handleChange.bind(this) }/>
        <CardList districtData={ this.state.districts }/>
      </div>
    );
  }
}

export default App;
