import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const CardList = ({ districtData, handleClick, cardsToCompare }) => {

  const cardArr = Object.keys(districtData).map( district => {
    return <Card  district={ districtData[district] }
                  key={ district }
                  handleClick={ handleClick }
                  cardBlank={false}
                  cardSelected={ cardsToCompare }/>
  })

  return (
    <div className="card-container">{ cardArr }</div>
  )

}

CardList.propTypes = {
  // districtData: PropTypes.object.isRequired,
  // object is string? string is object?

  handleClick: PropTypes.func.isRequired,
  cardsToCompare: PropTypes.array.isRequired
}

export default CardList
