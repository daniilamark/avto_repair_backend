const db = require('../config/db');
const UserModel = require("./user.model");
const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName
    },
    name: {
        type: String
        //required: true
    },
    model: {
        type: String
        //required: true
    }
},{timestamps:true});

const CarSchema = db.model('car', carSchema);
module.exports = CarSchema;