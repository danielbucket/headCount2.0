import React, { Component } from 'react';
import './App.css';
import CardList from './CardList';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField'
import CompareCards from './CompareCards'

let districtRepository = new DistrictRepository(kinderData)

class App extends Component {
  constructor () {
    super()
    this.state = {
      districts: '',
      compareCards: [],
    }
  }

  componentDidMount () {
    this.setState({
      districts: districtRepository.data,
      compareCards:[
        districtRepository.data['ACADEMY 20'],
        districtRepository.data['COLORADO']
        // 'cardLeft': "",
        // 'cardRight': ""
      ]
    })
  }

  handleChange (searchFieldValue) {
    this.setState({
      districts: districtRepository.findAllMatches(searchFieldValue)
    })
  }

  handleClick (district) {
    // console.log(district);

    //add class to highlight card
    //setState to populate compareCards array
    let compareCardsArray = this.state.compareCards
    compareCardsArray.splice(0, 1, district)

      // console.log(compareCardsArray);
    // this.setState({compareCards.push()})

    //unclick it- if the card has class "clicked", remove it
  }

  render() {
    return (
      <div id="heading">Welcome To Headcount 2.0 Counting Heads
        <SearchField onChange={ this.handleChange.bind(this) }/>
        <CompareCards   cardsToCompare={ this.state.compareCards }
                        districtClass={ districtRepository }
        />
        <CardList districtData={ this.state.districts }
                  handleClick={ this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
