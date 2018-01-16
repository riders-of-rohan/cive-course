'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LocationSelection from '../LocationSelection'


export const UserHome = props => {
  const { email } = props

  return (
    <div>
      <h3>Welcome, { email }</h3>
      <LocationSelection />
    </div>
  )
}

const mapState = state => ({
  email: state.user.email
})

UserHome.propTypes = {
  email: PropTypes.string
}


export default connect(mapState)(UserHome)
