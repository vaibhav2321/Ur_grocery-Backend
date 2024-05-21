const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/ur_grocery_db")
    .then(() => {
        console.log("Connection successful");
    })
    .catch((e) => {
        console.log("No connection");
    });
