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

//GET - finds all products associated with all provided locations
router.get('/locations/:locations', (req, res, next) => {
  const locations = req.params.locations.split('_')

  // bluebird spread locations

  Product.findAll({
    where: { locationId: req.params.locations }
  })
    .then(products => res.json(products))
    .catch(next)
})


module.exports = router


// how do I send an array restfully
  // action?id=a&id=b
  // query string
