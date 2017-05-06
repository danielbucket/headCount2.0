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
      leftRightIndicator: 'left', // 'left' card added most recently
      leftCardBlank: true,
      rightCardBlank: true
    }
  }

  componentDidMount () {
    this.setState({
      districts: districtRepository.data,
      compareCards:[{location: 'leftCardBlank'}, {location: 'rightCardBlank'}]
    })
  }

  handleChange (searchFieldValue) {
    this.setState({
      districts: districtRepository.findAllMatches(searchFieldValue)
    })
  }

  handleClick (district) {
    let compareCardsArray = this.state.compareCards;
    let leftRightIndicatorUpdate = this.state.leftRightIndicator;
    let leftCardBlankUpdate = this.state.leftCardBlank;
    let rightCardBlankUpdate = this.state.rightCardBlank;
    // console.log(district);
    // console.log('district: ', district.location);
    // let el = document.querySelectorAll('.district-card')
    // console.log(el);


    //At least one of the cards is blank
    if (compareCardsArray[0].location === 'leftCardBlank' && compareCardsArray[1].location === 'rightCardBlank' ) {
      compareCardsArray.splice(0, 1, district)
      console.log(compareCardsArray);
    } else if (compareCardsArray[0].location === 'leftCardBlank') {
      compareCardsArray.splice(0, 1, district)
    } else if (compareCardsArray[1].location === 'rightCardBlank') {
      compareCardsArray.splice(1, 1, district)
    }

    //Location has alread been selected
    if (district.location === compareCardsArray[0].location ||
        district.location === compareCardsArray[1].location) {
          const indexToRemove = compareCardsArray.findIndex( card => card.location === district.location )
          let leftRight;
          indexToRemove ? leftRight = 'rightCardBlank' : leftRight = 'leftCardBlank';
          compareCardsArray.splice(indexToRemove, 1, {location: leftRight});
          indexToRemove ? rightCardBlankUpdate = true : leftCardBlankUpdate = true;
      }

    //Both cards are populated
    if (compareCardsArray[0].location !== 'leftCardBlank' &&
        compareCardsArray[1].location !== 'rightCardBlank') {
      switch (leftRightIndicatorUpdate) {
        case 'left':
          compareCardsArray.splice(1, 1, district);
          leftRightIndicatorUpdate = 'right';
          break;
        case 'right':
          compareCardsArray.splice(0, 1, district);
          leftRightIndicatorUpdate = 'left';
          break;
        default:
      }
    }

    this.setState({
      compareCards: compareCardsArray,
      leftRightIndicator: leftRightIndicatorUpdate,
      leftCardBlank: leftCardBlankUpdate,
      rightCardBlank: rightCardBlankUpdate
    })

  }

  render() {
    console.log(this.state.compareCards);
    return (
      <div id="heading">Welcome To Headcount 2.0 Counting Heads
        <SearchField onChange={ this.handleChange.bind(this) }/>
        <CompareCards   cardsToCompare={ this.state.compareCards }
                        districtClass={ districtRepository }
                        leftCardBlank={ this.state.leftCardBlank }
                        rightCardBlank={ this.state.rightCardBlank }/>
        <CardList districtData={ this.state.districts }
                  handleClick={ this.handleClick.bind(this)}/>
      </div>
    );
  }
}

export default App;
