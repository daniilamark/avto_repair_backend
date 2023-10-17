const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        id: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        dateadded: {
            type: Date,
            default: Date.now,

        }
    }
);

module.exports = mongoose.model("User", userSchema);