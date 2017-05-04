import React from 'react';

const Card = ( {district} ) => {
  let highLowClass;
  let yearKeys = Object.keys(district.data)

  const yearData = yearKeys.map( year => {
    district.data[year] <= 0.5 ? highLowClass = 'low-percent' : highLowClass = 'high-percent';
    return <h4 className={highLowClass}
               key={year} >
               {year}: {district.data[year]}
           </h4>
  })

  return (
    <div className="district-card">
      <h3 className="district-name">{ district.location }</h3>
      <div className="year-data">{ yearData }</div>
    </div>
  )
}

export default Card
