var express = require('express')
var router = express.Router()

var mongoose = require('mongoose')
var Vehicle = require('../models/Vehicle.js')

/** GET /vehicles listing */
router.get('/', function(request,response,next) {
    Vehicle.find(function (error, vehicles) {
        error ? next(error) : response.json(vehicles)
    })
})

/** POST /vehicles creation */
router.post('/', function (request, response, next) {
    Vehicle.create(request.body, function(error, post) {
        error ? next(error) : response.json(post)
    })
})

/** GET /id vehicle by id */
router.get('/:id', function (request, response, next) {
    Vehicle.findById(request.params.id, function (error, post) {
        error ? next(error) : response.json(post)
    })
})

/** UPDATE vehicle by id */
router.put('/:id', function (request, response, next) {
    Vehicle.findByIdAndUpdate(request.params.id, request.body, function (error, post) {
        error ? next(error) : response.json(post)
    })
})

/** DELETE vehicle by id */
router.delete('/:id', function(request, response, next) {
    Vehicle.findByIdAndRemove(request.params.id, request.body, function (error, post) {
        error ? next(error) : response.json(post)
    })
})

module.exports = router