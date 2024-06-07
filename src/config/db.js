const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017/avtorepair').on('open', ()=>{
    console.log("✓ mongo db connected!");
}).on('error', ()=>{
    console.log("✕ mongo db connection ERROR!!!");
});

module.exports = connection;


