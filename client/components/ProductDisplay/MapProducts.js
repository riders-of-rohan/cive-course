'use strict'

import React from 'react'


const MapProducts = props => {
  const { products } = props

  return (
    products &&
    products.map(product => (
      <div key={ product.id } >
        <div>Product</div>
      </div>
    ))
  )
}


export default MapProducts
