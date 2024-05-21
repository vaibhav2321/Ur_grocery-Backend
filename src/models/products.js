const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true,
        unique: true
    },
    productCost: {
        type: Number,
        required: true
    },
    productCostBefore: {
        type: Number,
        required: true
    },
    productQuantity: {
        type: Number,
        required: true
    }, 
    thumbnail:{
        type: String,
        required: true
    }
});

// Export the model directly
module.exports = mongoose.model("Products", productSchema);
