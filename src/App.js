import React, { Component } from 'react';
import './css/App.css';
import CardList from './CardList';
import DistrictRepository from './helper.js'
import kinderData from '../data/kindergartners_in_full_day_program.js';
import SearchField from './SearchField';
import CompareCards from './CompareCards';

const districtRepository = new DistrictRepository(kinderData)

class App extends Component {
  constructor () {
    super()
    this.state = {
      districts: '',
      compareCards: [],
      leftRightIndicator: 'left', // card added most recently
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
    let leftCardBlankUpdate = this.state.leftCardBlank;
    let rightCardBlankUpdate = this.state.rightCardBlank;

    //Location has already been selected
    if (district.location === compareCardsArray[0].location ||
        district.location === compareCardsArray[1].location) {
      this.updateSelectedCards (district, compareCardsArray, leftCardBlankUpdate, rightCardBlankUpdate)
    }

    //At least one of the cards is blank
    else if ( compareCardsArray[0].location === 'leftCardBlank' ||
              compareCardsArray[1].location === 'rightCardBlank' ) {
      this.updateAtLeastOneCardBlank(district, compareCardsArray, leftCardBlankUpdate, rightCardBlankUpdate)

      //Both cards are populated
    }
    else if ( compareCardsArray[0].location !== 'leftCardBlank' &&
                compareCardsArray[1].location !== 'rightCardBlank') {
      this.updateBothCardsPopulated(district, compareCardsArray)
    }

  }

  updateSelectedCards (district, compareCardsArray, leftCardBlankUpdate, rightCardBlankUpdate) {
    const indexToRemove = compareCardsArray.findIndex( card => card.location === district.location )
    let leftRight;

    if (indexToRemove) {
      leftRight = 'rightCardBlank';
      rightCardBlankUpdate = true;
    } else {
      leftRight = 'leftCardBlank';
      leftCardBlankUpdate = true
    }
    compareCardsArray.splice(indexToRemove, 1, {location: leftRight});

    this.setState({
      compareCards: compareCardsArray,
      leftCardBlank: leftCardBlankUpdate,
      rightCardBlank: rightCardBlankUpdate
    })
  }

  updateAtLeastOneCardBlank (district, compareCardsArray, leftCardBlankUpdate, rightCardBlankUpdate) {

    if (compareCardsArray[0].location === 'leftCardBlank') {
      compareCardsArray.splice(0, 1, district);
      leftCardBlankUpdate = false;
    } else if (compareCardsArray[1].location === 'rightCardBlank') {
      compareCardsArray.splice(1, 1, district);
      rightCardBlankUpdate = false;
    }

    this.setState({
      compareCards: compareCardsArray,
      leftCardBlank: leftCardBlankUpdate,
      rightCardBlank: rightCardBlankUpdate
    })
  }

  updateBothCardsPopulated(district, compareCardsArray) {
    let leftRightIndicatorUpdate = this.state.leftRightIndicator;

    if (leftRightIndicatorUpdate === 'left') {
      compareCardsArray.splice(1, 1, district);
      leftRightIndicatorUpdate = 'right';
    } else {
      compareCardsArray.splice(0, 1, district);
      leftRightIndicatorUpdate = 'left';
    }
    this.setState({
      leftRightIndicator: leftRightIndicatorUpdate,
      compareCards: compareCardsArray
    })
  }

  render() {
    return (
      <div className="App-container">

        <div id="heading-container">
          <div className="heading">
              <h4 className="title">
                USGS Special Dept. of Educational Head Counting Services Office of the Government
                <br/>
                circa 1996
              </h4>
              <div className="search-field">
                <p className="search-field-text">
                  Search for a Location
                </p>
                <SearchField onChange={ this.handleChange.bind(this) }/>
              </div>
          </div>
        </div>

        <div className="compare-cards-container">
          <CompareCards cardsToCompare={ this.state.compareCards }
                        districtClass={ districtRepository }
                        handleClick={ this.handleClick.bind(this) }
                        leftCardBlank={ this.state.leftCardBlank }
                        rightCardBlank={ this.state.rightCardBlank }
                      />

          <div className="legend">
            <p>
              Data shown in <span className="year-red">red</span> represents a graduation rate of below 50%.
            </p>
            <p>
              Data shown in <span className="year-blue">blue</span> represents a graduation rate of above 50%.
            </p>
          </div>
          <div className="instruction">
            <p>
              After selecting two cards, scroll back to the <span>top</span> to see the compared data.
            </p>
          </div>
        </div>

        <CardList districtData={ this.state.districts }
                  handleClick={ this.handleClick.bind(this)}
                  cardsToCompare={ this.state.compareCards }/>

      </div>
    );
  }

}


export default App;
