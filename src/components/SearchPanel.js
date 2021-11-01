import React, {Component} from 'react'

import './SearchPanel.css'

class SearchPanel extends Component {
  constructor(){
    super()
    this.state = {
      searchInput: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const inputValue = event.target.value
    this.setState({searchInput: inputValue})
    this.props.onSearch(inputValue)
  }

  render(){
    return (
      <input
          type="text"
          className="form-control search-input"
          placeholder="Type to search"
          value={this.state.searchInput}
          onChange={this.handleChange}
      />
    )
  }
}

export default SearchPanel
