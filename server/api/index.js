'use strict'

const router = require('express').Router()
const { err } = require('./utils')


router.use('/users', require('./users'))


router.use((req, res, next) => next(err(404, 'Not Found')))


module.exports = router
