'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const SET_LOCATION = 'SET_LOCATION'

/**
 * ACTION CREATORS
 */
export const setLocation = location => ({ type: SET_LOCATION, location })

/**
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case SET_LOCATION:
      return action.location

    default:
      return state
  }
}
