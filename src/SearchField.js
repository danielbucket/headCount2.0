import React, { Component } from 'react';

export default class SearchField extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  render() {
    return(
      <div id="search-container">
        <input  id="search-input"
                placeholder="search"
                value={ this.state.search }
                onChange={ e => {this.setState({ search: e.target.value })}}
              />

      </div>
    )
  }


}
