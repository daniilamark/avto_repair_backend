// initialization
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect("mongodb+srv://daniilamark:dbdiplomflutter2023@daniilamark.e8uqtpx.mongodb.net/").then(function()
{
    // app routes
    app.get("/",function(req, res){
        res.send("Home");
    });


    app.get("/users/list", async function(req, res){
        var users = await User.find();
        res.json(users);
    });

    app.get("/users/add", async function(req, res){
        const newUser = new User({
            id: "0002",
            name: "daniil",
            age: 221
        });
        await newUser.save();
        const response = { message: "new user created"};
        res.json(response);
    });
});




//starting the server on a port 
app.listen(5000, function(){
    console.log("++++++++++++++++++++++++++++\nserver started at PORT: 5000\n++++++++++++++++++++++++++++");
});