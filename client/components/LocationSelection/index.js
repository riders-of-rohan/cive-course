'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLocation } from '../../store'


class locationSelection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      locations: [],
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleClick (event) {
    event.preventDefault()

    const selection = event.target.value
    const locations = this.state.locations

    locations.includes(selection)
      ? this.setState({ locations: locations.filter(location => location !== selection) })
      : this.setState({ locations: locations.concat([selection]) })
  }

  handleSubmit (event) {
    event.preventDefault()
    const locations = this.state.locations

    // validate a selection by the user before submitting form
    locations.length
      ? this.props.setLocation(locations)
      : this.setState({ visable: true })
  }

  render () {
    const { handleClick, handleSubmit, state } = this
    // ***add style*** / select tags don't initially work

    return (
      <form onSubmit={ handleSubmit }>
        <div>
          {
            state.visable &&
            <div>*YOU NEED TO SELECT A LOCATION BEFORE MOVING ON*</div>
          }
          <button onClick={ handleClick } value="Pennsylvania">Pennsylvania</button>
          <button onClick={ handleClick } value="New Jersey">New Jersey</button>
          <button onClick={ handleClick } value="New York">New York</button>
        </div>

        <button type="submit">Submit</button>
      </form>
    )
  }

}

const mapDispatch = dispatch => ({
  setLocation: location => dispatch(setLocation(location))
})


export default connect(null, mapDispatch)(locationSelection)
