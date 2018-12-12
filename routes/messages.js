'use strict'

const knex = require('../knex.js')
const express = require('express')
const router = express.Router()


// YOUR CODE HERE
// get ONE
router.get('/', (req, res, next) => {
  knex('messages')
    .select('id', 'name', 'message')
    .then((response) => {
      res.status(200).send(response)
    })
})

// get ALL
router.get('/:id', (req, res, next) =>{
  
})

// add ONE
router.put('/', (req, res, next) =>{
  
})

// update ONE
router.patch('/', (req, res, next) =>{
  
})

// delete ONE
router.delete('/', (req, res, next) =>{
  
})


module.exports = router
