import React from 'react';

const SearchField = ({ onChange }) => {

  const submitChange = (userSearchInput) => {
    onChange(userSearchInput)
  }

  return(
    <div id="search-container">
      <input  id="search-input"
              placeholder="search"
              onChange={ e => { submitChange(e.target.value) } }
      />
    </div>
  )

}

export default SearchField;
