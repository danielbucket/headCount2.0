import React from 'react';
import PropTypes from 'prop-types';

const CompareCard = ( {cardsToCompare, districtClass, rightArrow, leftArrow} ) => {

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
        <h2 className="top-left-comparitor">

          <p className="comparitor-location">'{location1}'</p>
          <p>Comparison Ratio: {compareObj[location1]}</p>

        </h2>
        <h2 className="center-comparision-value">
          <p>Median District Graduation:</p>
          <p>{compareObj['compared']}</p>
        </h2>
        <h2 className="bottom-right-comparitor">
          <p className="comparitor-location">'{location2}'</p>
          <p>Average graduation rate: {compareObj[location2]}</p>
        </h2>
      </div>
    )
  }

}

CompareCard.propTypes = {
  cardsToCompare: PropTypes.array.isRequired,
  districtClass: PropTypes.object.isRequired
}

export default CompareCard
