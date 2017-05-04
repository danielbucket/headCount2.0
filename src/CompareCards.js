import React from 'react'
import Card from './Card'
import CompareCard from './CompareCard'

const CompareCards = ( {cardsToCompare, districtClass} ) => {
  if (!cardsToCompare.length) {
    return (
      <div></div>
    )
  }

  return(
    <div className='compare-cards-container'>
      <Card district={ cardsToCompare[0] } key={ cardsToCompare[0].location } />
      <CompareCard  cardsToCompare={ cardsToCompare }
                    districtClass={ districtClass }  />
      <Card district={ cardsToCompare[1] } key={ cardsToCompare[1].location } />
    </div>
  )
}

export default CompareCards
