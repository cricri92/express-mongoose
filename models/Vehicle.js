var mongoose = require('mongoose')

var VehicleSchema = new mongoose.Schema({
        "id": Number,
        "brand": String,
        "model": String,
        "trailer_type": String,   
        "license_plate": String,
        "color": String,
        "year": Number,
        "chassis_serial": String,
        "engine_serial": String,
        "mileage": Number
  }) 
  
  module.exports = mongoose.model('Vehicle', VehicleSchema)