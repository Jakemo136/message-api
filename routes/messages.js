'use strict'

const knex = require('../knex.js')
const express = require('express')
const router = express.Router()


// YOUR CODE HERE
// get ALL
router.get('/', (req, res, next) => {
  knex('messages')
    .select('id', 'name', 'message')
    .then((result) => {
      res.status(200).send(result)
    })
})

// get ONE
router.get('/:id', (req, res, next) =>{
  knex('messages')
    .where('id', req.params.id)
    .returning('*')
    .select('id', 'name', 'message')
    .first()
  .then((result) => {
      res.status(200).send(result)
    })    
})

// add ONE
router.post('/', (req, res, next) =>{
  knex('messages')
    .insert({
      'name': req.body.name,
      'message': req.body.message
    })
    .returning(['id', 'name', 'message'])
  .then((result) => {
    console.log(result)
    res.status(200).send(result[0])
  })
})

// update ONE
router.patch('/:id', (req, res, next) =>{
  knex('messages')
    .where('id', req.params.id)
    .update({
      'name': req.body.name,
      'message': req.body.message
    })
    .returning(['id', 'name', 'message'])
  .then((result) => {
    res.status(200).send(result[0])
  })
})

// delete ONE
router.delete('/', (req, res, next) =>{
  
})


module.exports = router
