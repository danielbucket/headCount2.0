import React from 'react';
import PropTypes from 'prop-types';

const CompareCard = ( {cardsToCompare, districtClass} ) => {

  if (cardsToCompare[0].location === 'leftCardBlank' ||
      cardsToCompare[1].location === 'rightCardBlank'){
    return(
      <div className='populate-instructions'>
        Select two cards below and see the statistical comparison data here.
      </div>
    )
  } else {

    let location1 = cardsToCompare[0].location;
    let location2 = cardsToCompare[1].location;
    let compareObj = districtClass.compareDistrictAverages(cardsToCompare[0].location, cardsToCompare[1].location)

    return(
      <div className='compare-card'>
          <h2>
            <img src="./img/001-right-arrow.svg" />{location1}: {compareObj[location1]}
          </h2>
        <h2>{compareObj['compared']}</h2>
        <h2>{location2}: {compareObj[location2]}<img src="./img/002-left-arrow.svg" /></h2>
      </div>
    )
  }

}

CompareCard.propTypes = {
  cardsToCompare: PropTypes.array.isRequired,
  districtClass: PropTypes.object.isRequired
}

export default CompareCard
