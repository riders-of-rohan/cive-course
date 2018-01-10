import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setLocation } from '../../store'

class locationSelection extends Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick(event) {
    const input = event.target.value
    const locations = this.state.locations

    locations.includes(input) ? this.setState({locations: locations.filter(location => location !== input)}) : this.setState({locations: locations.concat([input])})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.setLocation(this.state.locations)
  }

  render() {
  return (
    <form >
      <select>
        <option onClick={ this.handleClick } value="Pennsylvania">Pennsylvania</option>
        <option onClick={ this.handleClick } value="New Jersey">New Jersey</option>
        <option onClick={ this.handleClick } value="New York">New York</option>
      </select>

      <button type="submit" onSubmit={ this.handleSubmit }>Submit</button>
    </form>
    )
  }
}

const mapDispatch = dispatch => ({
  setLocation: location => dispatch(setLocation(location))
})

export default connect(null, mapDispatchToProps)(locationSelection)
