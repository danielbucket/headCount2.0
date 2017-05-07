import React from 'react';
import PropTypes from 'prop-types';

const Card = ( {district, handleClick, cardBlank, cardSelected} ) => {

  if (cardBlank) {
    return (
      <div className='blank-card'></div>
    )
  } else {
    let highLowClass;
    let yearKeys = Object.keys(district.data)

    const yearData = yearKeys.map( year => {
      district.data[year] <= 0.500 ? highLowClass = 'low-percent' : highLowClass = 'high-percent';
      return <h4 className={highLowClass}
                 key={year} >

                 <div className="district-data-year">
                   {year}:
                 </div>

                 <div className="district-data-data">
                   {district.data[year]}
                 </div>
             </h4>
    })

    let cardClass;

    if( district.location === cardSelected[0].location ||
        district.location === cardSelected[1].location) {
      cardClass = 'district-card selected';
    } else {
      cardClass = 'district-card';
    }

    const submitClick = () => {
      handleClick(district)
    }

    return(
      <div  className={ cardClass }
            onClick={ e => { submitClick() }}>
        <div className="card-sub-container">
          <h3 className="district-name">{ district.location }</h3>
          <div className="year-data">{ yearData }</div>
        </div>
      </div>
    )
  }

}

Card.propTypes = {
  district: PropTypes.object,
  cardBlank: PropTypes.bool,
  cardSelected: PropTypes.array
}


export default Card
