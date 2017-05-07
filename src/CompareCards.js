import React from 'react'
import Card from './Card'
import CompareCard from './CompareCard'

const CompareCards = ( {cardsToCompare, districtClass, leftCardBlank, rightCardBlank} ) => {
  if (!cardsToCompare.length) {
    return (
      <div></div>
    )
  }

  return(
    <div className='compare-cards-box'>
      <div className="left-card">
        <Card district={ cardsToCompare[0] }
              key={ cardsToCompare[0].location }
              cardBlank={ leftCardBlank }
              cardSelected={ cardsToCompare }/>
      </div>

      <div className="compare-card-container">
        <CompareCard  cardsToCompare={ cardsToCompare }
                      districtClass={ districtClass }  />
      </div>

      <div className="right-card">
        <Card district={ cardsToCompare[1] }
              key={ cardsToCompare[1].location }
              cardBlank={ rightCardBlank }
              cardSelected={ cardsToCompare }/>
      </div>
    </div>
  )
}

export default CompareCards
