import React from 'react';

const CompareCard = ( {cardsToCompare, districtClass} ) => {

  if (cardsToCompare[0].location === 'leftCardBlank' || 
      cardsToCompare[1].location === 'rightCardBlank'){
    return(
      <div>  POPULATE BOTH CARDS YO  </div>
    )
  } else {

    let location1 = cardsToCompare[0].location;
    let location2 = cardsToCompare[1].location;
    let compareObj = districtClass.compareDistrictAverages(cardsToCompare[0].location, cardsToCompare[1].location)

    return(
      <div className='compare-card'>
        <h2>{location1}: {compareObj[location1]}</h2>
        <h2>{compareObj['compared']}</h2>
        <h2>{location2}: {compareObj[location2]}</h2>
      </div>
    )
  }

}

export default CompareCard
