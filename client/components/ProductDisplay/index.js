'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLocationProducts } from '../../store'
import MapProducts from './MapProducts'


class ProductDisplay extends Component {

  componentDidMount () {
    this.props.fetchLocationProducts(this.props.locationId)
  }

  render () {

    return (
      <div>
        <MapProducts products={ this.props.products } />
      </div>
    )
  }

}

const mapState = state => ({
  products: state.locationProducts,
  locationId: state //.location.id
})

const mapDispatch = dispatch => ({
  fetchLocationProducts: locationId => dispatch(fetchLocationProducts(locationId))
})


export default connect(mapState, mapDispatch)(ProductDisplay)
