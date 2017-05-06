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
    <div className='compare-cards-container'>
      <Card district={ cardsToCompare[0] }
            key={ cardsToCompare[0].location }
            cardBlank={ leftCardBlank }
            cardSelected={ cardsToCompare }/>
      <CompareCard  cardsToCompare={ cardsToCompare }
                    districtClass={ districtClass }  />
      <Card district={ cardsToCompare[1] }
            key={ cardsToCompare[1].location }
            cardBlank={ rightCardBlank }
            cardSelected={ cardsToCompare }/>
    </div>
  )
}

export default CompareCards
