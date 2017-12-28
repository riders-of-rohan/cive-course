'use strict'

const Sequelize = require('sequelize')
const db = require('../../_db')


const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  tags: Sequelize.STRING,
  available: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})


module.exports = Product
