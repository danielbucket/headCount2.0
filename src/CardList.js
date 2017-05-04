import React from 'react';
import Card from './Card';

const CardList = ({ districtData }) => {
  const cardArr = Object.keys(districtData).map( district => {
    return <Card district={ districtData[district] } key={ district } />
  })

  return (
    <div className="card-container">{ cardArr }</div>
  )

}

export default CardList
