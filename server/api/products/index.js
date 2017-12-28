'use strict'

const router = require('express').Router()
const { err } = require('../utils')
const { Product } = require('../../db/models')


// finds a product by id, passes it down as req.product
router.param('/:id', (req, res, next, id) => {
  Product.findById(id)
    .then(product => {
      if (!product) throw err(404, 'product not found')
      else {
        req.product = product
        next()
        return null
      }
    })
    .catch(next)
})

//GET - finds all products associated with this location
router.get('/:locationId', (req, res, next) => {
  Product.findAll({
    where: { locationId: req.params.locationId }
  })
    .then(products => res.json(products))
    .catch(next)
})


module.exports = router
