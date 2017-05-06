import React from 'react';

var cardClass = 'district-card';

const Card = ( {district, handleClick, cardBlank} ) => {

  if (cardBlank) {
    return (
      <div>BLANK CARD</div>
    )
  } else {

  let highLowClass;

  let yearKeys = Object.keys(district.data)

  const yearData = yearKeys.map( year => {
    district.data[year] <= 0.5 ? highLowClass = 'low-percent' : highLowClass = 'high-percent';
    return <h4 className={highLowClass}
               key={year} >
               {year}: {district.data[year]}
           </h4>
  })

  // const manageClick = () => {
  //
  //   if (cardClass === 'district-card-unclicked') {
  //     cardClass = 'district-card-clicked'
  //   } else if (cardClass === 'district-card-clicked') {
  //     cardClass = 'district-card-unclicked'
  //   }
  //   console.log(cardClass);
  //   //the cardClass value is changing, but a render needs to happen before the changes can take place
  //
  //   handleClick(district)
  // }

    return (
      <div className={ cardClass }
        onClick={ e => { handleClick(district) }}
        >
          <h3 className="district-name">{ district.location }</h3>
          <div className="year-data">{ yearData }</div>
        </div>
      )
  }

}

export default Card
