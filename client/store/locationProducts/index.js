'use strict'

import axios from 'axios'


/**
 * ACTION TYPES
 */
const GET_LOCATION_PRODUCTS = 'GET_LOCATION_PRODUCTS'

/**
 * ACTION CREATORS
 */
export const getLocationProducts = products => ({ type: GET_LOCATION_PRODUCTS, products })

/**
 * THUNK CREATORS
 */
export const fetchLocationProducts = locations => dispatch => {
  let locationId = ''
  locations.forEach(location => {
    locationId = `${locationId}_${location.id}`
  }) //there are no ids for locations

  axios.get(`/api/products/locations/${locationId}`)
    .then(res => dispatch(getLocationProducts(res.data)))
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default (state = [], action) => {
  switch (action.type) {
    case GET_LOCATION_PRODUCTS:
      return action.products

    default:
      return state
  }
}
