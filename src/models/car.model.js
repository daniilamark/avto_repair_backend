const { Int32 } = require('mongodb');
const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        // required: true
    },
    mileage: {
        type: String,
        // required: true
    },
    yearIssue: {
        type: String,
        // required: true
    },
    typeFuel: {
        type: String,
        // required: true
    },
    volumeTank: {
        type: String,
        // required: true
    },
    number: {
        type: String,
        // required: true
    },
    vin: {
        type: String,
        // required: true
    },
    carBody: {
        type: String,
        // required: true
    },
    transmission: {
        type: String,
        // required: true
    },
    engineVolume: {
        type: String,
        // required: true
    },
    enginePower: {
        type: String,
        // required: true
    }
},{timestamps:true});

const CarSchema = db.model('car', carSchema);
module.exports = CarSchema;