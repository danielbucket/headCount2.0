import React from 'react';

const Card = ( {district} ) => {
  let yearKeys = Object.keys(district.data)

  const yearData = yearKeys.map( year => {
    return <h4 key={year} >{year}: {district.data[year]}</h4>
  })

  return (
    <div>
      <h3>{ district.location }</h3>
      <div>{ yearData }</div>
    </div>
  )
}

export default Card
